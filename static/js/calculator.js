
/**
 * Calculator functionality - vanilla JavaScript for performance
 */

let calculatorState = {
    targetDomain: '',
    market: 'global',
    budget: 0,
    domainAnalysis: null,
    results: null
};

let debounceTimer;

function initCalculator() {
    const form = document.getElementById('calculator-form');
    const targetDomainInput = document.getElementById('targetDomain');
    const marketSelect = document.getElementById('market');
    const budgetInput = document.getElementById('budget');
    
    if (!form || !targetDomainInput || !marketSelect || !budgetInput) {
        console.error('Calculator form elements not found');
        return;
    }

    // Add event listeners
    targetDomainInput.addEventListener('input', debounce(handleDomainChange, 500));
    marketSelect.addEventListener('change', handleMarketChange);
    budgetInput.addEventListener('input', debounce(handleBudgetChange, 500));
    
    // Get CSRF token
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    
    // Initialize state
    calculatorState.market = marketSelect.value;
    
    function debounce(func, wait) {
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(debounceTimer);
                func(...args);
            };
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(later, wait);
        };
    }

    async function handleDomainChange(event) {
        const domain = event.target.value.trim();
        calculatorState.targetDomain = domain;
        
        if (domain) {
            try {
                const response = await fetch('/api/analyze-domain/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken
                    },
                    body: JSON.stringify({ domain })
                });
                
                if (response.ok) {
                    const analysis = await response.json();
                    calculatorState.domainAnalysis = analysis;
                    updateDomainDisplay(analysis);
                } else {
                    console.error('Domain analysis failed');
                    calculatorState.domainAnalysis = null;
                }
            } catch (error) {
                console.error('Domain analysis error:', error);
                calculatorState.domainAnalysis = null;
            }
        } else {
            calculatorState.domainAnalysis = null;
            updateDomainDisplay(null);
        }
        
        calculatePricing();
    }

    function handleMarketChange(event) {
        calculatorState.market = event.target.value;
        calculatePricing();
    }

    function handleBudgetChange(event) {
        calculatorState.budget = parseFloat(event.target.value) || 0;
        updateCalculatorStatus();
        calculatePricing();
    }

    async function calculatePricing() {
        if (calculatorState.budget < 5000) {
            updateResults(null);
            return;
        }

        try {
            const response = await fetch('/api/calculate-pricing/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken
                },
                body: JSON.stringify({
                    market: calculatorState.market,
                    budget: calculatorState.budget,
                    targetDomain: calculatorState.targetDomain
                })
            });

            if (response.ok) {
                const results = await response.json();
                calculatorState.results = results;
                updateResults(results);
            } else {
                console.error('Pricing calculation failed');
                updateResults(null);
            }
        } catch (error) {
            console.error('Pricing calculation error:', error);
            updateResults(null);
        }
    }

    function updateCalculatorStatus() {
        const statusElement = document.getElementById('calculator-status');
        if (calculatorState.budget >= 5000) {
            statusElement.textContent = `£${calculatorState.budget.toLocaleString()} BUDGET ENTERED`;
        } else {
            statusElement.textContent = 'ENTER YOUR REQUIREMENTS...';
        }
    }

    function updateDomainDisplay(analysis) {
        const domainDisplay = document.getElementById('domain-display');
        if (analysis && analysis.domain) {
            domainDisplay.style.display = 'block';
            let text = `TARGET: ${analysis.domain.toUpperCase()}`;
            if (analysis.has_triggered_content) {
                text += ` [${analysis.content_category.toUpperCase()}]`;
            }
            domainDisplay.textContent = text;
        } else {
            domainDisplay.style.display = 'none';
        }
    }

    function updateResults(results) {
        const messagesContainer = document.getElementById('calculator-messages');
        const resultsContainer = document.getElementById('calculator-results');
        
        // Clear containers
        messagesContainer.innerHTML = '';
        resultsContainer.innerHTML = '';
        
        if (!results) return;
        
        // Show messages
        if (results.is_blocked) {
            messagesContainer.innerHTML = `
                <div class="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                    <p class="text-red-800 text-center font-medium">
                        ❌ This domain contains blocked content and cannot be processed. Please contact our team for alternative solutions.
                    </p>
                </div>
            `;
            return;
        }
        
        if (results.insufficient_budget) {
            messagesContainer.innerHTML = `
                <div class="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                    <p class="text-red-600 text-center">Minimum budget is £5,000</p>
                </div>
            `;
            return;
        }
        
        if (calculatorState.domainAnalysis && calculatorState.domainAnalysis.has_triggered_content && !calculatorState.domainAnalysis.is_blocked) {
            messagesContainer.innerHTML = `
                <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
                    <p class="text-orange-800 text-center font-medium">
                        ⚠️ ${calculatorState.domainAnalysis.content_category} domains require specialized outreach (+${Math.round((calculatorState.domainAnalysis.price_multiplier - 1) * 100)}% premium pricing)
                    </p>
                </div>
            `;
        }
        
        if (results.hint_message) {
            messagesContainer.innerHTML += `
                <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                    <p class="text-yellow-800 text-center font-medium">
                        ${results.hint_message}
                    </p>
                </div>
            `;
        }
        
        if (results.has_volume_discount && results.budget >= 90000 && results.budget < 140000) {
            messagesContainer.innerHTML += `
                <div class="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                    <p class="text-green-800 text-center font-medium">
                        ✅ You're enjoying 10% volume pricing! <span class="text-sm text-green-600">Tip: 15% discount unlocks at £151,000</span>
                    </p>
                </div>
            `;
        }
        
        // Show results
        if (results.show_contact_sales) {
            resultsContainer.innerHTML = `
                <div class="bg-white rounded-xl p-6 mb-6 border-2 border-gray-300">
                    <div class="text-center">
                        <h3 class="text-xl font-bold text-gray-900 mb-4">Bespoke Solution Required</h3>
                        <p class="text-gray-600 mb-4">
                            For multiple markets or custom requirements, our sales team will create a tailored solution for your needs.
                        </p>
                        <div class="text-3xl font-bold text-pink-500 mb-2 font-mono">£${results.budget.toLocaleString()}</div>
                        <div class="text-sm text-gray-600">Budget Available</div>
                        ${calculatorState.targetDomain ? `<div class="text-sm text-gray-500 mt-2">Target: ${calculatorState.targetDomain}</div>` : ''}
                    </div>
                </div>
                <div class="text-center">
                    <button onclick="openContactModal('bespoke')" class="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Contact Sales Team
                    </button>
                </div>
            `;
        } else {
            const gridCols = results.hide_links_count ? 'md:grid-cols-2' : 'md:grid-cols-3';
            
            let volumeDiscountBadge = '';
            if (results.has_volume_discount) {
                const badgeColor = results.discount_percentage === 15 ? 'bg-purple-500' : 'bg-green-500';
                volumeDiscountBadge = `
                    <div class="flex justify-center mb-4">
                        <span class="${badgeColor} text-white px-4 py-2 text-sm font-semibold rounded-full">
                            🎉 ${results.discount_percentage}% Volume Discount Applied
                        </span>
                    </div>
                `;
            }
            
            let domainSurchargeBadge = '';
            if (results.has_domain_surcharge) {
                domainSurchargeBadge = `
                    <div class="flex justify-center mb-4">
                        <span class="bg-orange-500 text-white px-4 py-2 text-sm font-semibold rounded-full">
                            📈 +${results.domain_surcharge_amount}% ${calculatorState.domainAnalysis.content_category} Premium
                        </span>
                    </div>
                `;
            }
            
            let linksColumn = '';
            if (!results.hide_links_count) {
                linksColumn = `
                    <div class="text-center">
                        <div class="text-3xl font-bold text-pink-500 mb-2 font-mono">${results.links_count}</div>
                        <div class="text-sm text-gray-600">
                            ${results.has_volume_discount ? "Total Links (with bonus)" : "Guaranteed Links"}
                        </div>
                        ${results.has_volume_discount && results.bonus_links ? `
                            <div class="text-xs text-green-600 font-medium mt-1">
                                +${results.bonus_links} bonus links from ${results.discount_percentage}% discount
                            </div>` : ''}
                    </div>
                `;
            }
            
            let volumeBreakdown = '';
            if (results.has_volume_discount && !results.hide_links_count) {
                volumeBreakdown = `
                    <div class="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                        <div class="text-center">
                            <h4 class="font-semibold text-green-800 mb-2">${results.discount_percentage}% Volume Discount Breakdown</h4>
                            <div class="grid md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <div class="text-gray-600">Standard rate:</div>
                                    <div class="font-medium font-mono">£${results.standard_cost_per_link} per link</div>
                                    <div class="text-gray-500">(${results.standard_links_count} links)</div>
                                </div>
                                <div>
                                    <div class="text-gray-600">Volume rate (${results.discount_percentage}% off):</div>
                                    <div class="font-medium text-green-600 font-mono">£${Math.round(results.discounted_cost_per_link)} per link</div>
                                    <div class="text-green-600">(${results.links_count} links total)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            let domainSurchargeSection = '';
            if (results.has_domain_surcharge && !results.hide_links_count) {
                domainSurchargeSection = `
                    <div class="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <div class="text-center">
                            <h4 class="font-semibold text-orange-800 mb-2">${calculatorState.domainAnalysis.content_category} Premium Applied</h4>
                            <p class="text-sm text-orange-700">
                                This content category requires specialized outreach strategies and journalist relationships, 
                                resulting in a ${results.domain_surcharge_amount}% premium on standard rates.
                            </p>
                        </div>
                    </div>
                `;
            }
            
            let bespokeMessage = '';
            if (results.hide_links_count) {
                bespokeMessage = `
                    <div class="text-center mt-4 p-4 bg-pink-50 rounded-lg">
                        <p class="text-gray-900 font-medium">
                            For investments over £250,000, we'll design a bespoke solution with our sales team.
                        </p>
                    </div>
                `;
            }
            
            const buttonText = results.hide_links_count || results.budget >= 250000 ? 
                "Contact Sales Team" : 
                "Launch Zero Intervention Package";
            
            resultsContainer.innerHTML = `
                <div class="bg-white rounded-xl p-6 mb-6 border-2 border-gray-300">
                    ${volumeDiscountBadge}
                    ${domainSurchargeBadge}
                    
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Your Package</h3>
                    <div class="grid ${gridCols} gap-6">
                        ${linksColumn}
                        <div class="text-center">
                            <div class="text-3xl font-bold text-pink-500 mb-2 font-mono">£${results.budget.toLocaleString()}</div>
                            <div class="text-sm text-gray-600">Total Investment</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-pink-500 mb-2">${results.delivery_window}</div>
                            <div class="text-sm text-gray-600">
                                ${results.hide_links_count ? "Contact Required" : "Delivery Window"}
                            </div>
                        </div>
                    </div>
                    
                    ${volumeBreakdown}
                    ${domainSurchargeSection}
                    ${bespokeMessage}
                </div>

                <div class="text-center">
                    <button onclick="handleCalculatorSubmit()" class="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        ${buttonText}
                    </button>
                </div>
            `;
        }
    }
}

function handleCalculatorSubmit() {
    const results = calculatorState.results;
    if (results && (results.show_contact_sales || results.budget >= 250000)) {
        openContactModal('bespoke');
    } else if (results) {
        openContactModal('calculator');
    }
}

// Global function for opening contact modal
window.openContactModal = function(type) {
    const modal = document.getElementById('contact-modal');
    const packageTypeField = document.querySelector('[name="package_type"]');
    
    if (packageTypeField) {
        packageTypeField.value = type;
    }
    
    modal.classList.remove('hidden');
    
    // Set focus for accessibility
    const firstInput = modal.querySelector('input');
    if (firstInput) {
        firstInput.focus();
    }
};

// Close modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contact-modal');
    const closeButton = document.getElementById('close-modal');
    
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.classList.add('hidden');
        });
    }
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    });
});
