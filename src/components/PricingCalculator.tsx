
import { useState, useEffect } from "react";
import { analyzeDomain, DomainAnalysis } from "@/utils/domainUtils";
import CalculatorHeader from "./CalculatorHeader";
import CalculatorForm from "./CalculatorForm";
import CalculatorMessages from "./CalculatorMessages";
import CalculatorResultsComponent from "./CalculatorResults";

interface CalculatorResults {
  market: string;
  budget: number;
  targetDomain?: string;
  domainAnalysis?: DomainAnalysis;
  linksCount?: number;
  deliveryWindow: string;
  costPerLink?: number;
  showContactSales?: boolean;
  hideLinksCount?: boolean;
  hasVolumeDiscount?: boolean;
  standardLinksCount?: number;
  bonusLinks?: number;
  standardCostPerLink?: number;
  discountedCostPerLink?: number;
  discountPercentage?: number;
  hasDomainSurcharge?: boolean;
  domainSurchargeAmount?: number;
}

interface PricingCalculatorProps {
  onResultsChange: (results: CalculatorResults | null) => void;
}

const PricingCalculator = ({ onResultsChange }: PricingCalculatorProps) => {
  const [market, setMarket] = useState("global");
  const [budget, setBudget] = useState("");
  const [targetDomain, setTargetDomain] = useState("");
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [domainAnalysis, setDomainAnalysis] = useState<DomainAnalysis | null>(null);

  const marketRates = {
    global: 650,
    english: 650,
    american: 750,
    canadian: 950,
    australian: 950,
    german: 1000,
    french: 1000,
    italian: 850,
    spanish: 850
  };

  const TIER_1_THRESHOLD = 90000;
  const TIER_2_THRESHOLD = 151000;
  const BESPOKE_THRESHOLD = 250000;

  // Analyze domain when it changes
  useEffect(() => {
    if (targetDomain.trim()) {
      const analysis = analyzeDomain(targetDomain);
      setDomainAnalysis(analysis);
    } else {
      setDomainAnalysis(null);
    }
  }, [targetDomain]);

  const getVolumeDiscount = (budgetAmount: number) => {
    if (budgetAmount >= TIER_2_THRESHOLD && budgetAmount < BESPOKE_THRESHOLD) {
      return { rate: 0.15, percentage: 15 };
    } else if (budgetAmount >= TIER_1_THRESHOLD && budgetAmount < TIER_2_THRESHOLD) {
      return { rate: 0.10, percentage: 10 };
    }
    return { rate: 0, percentage: 0 };
  };

  const getHintMessage = (budgetAmount: number) => {
    if (budgetAmount >= 85000 && budgetAmount < TIER_1_THRESHOLD) {
      const amountNeeded = TIER_1_THRESHOLD - budgetAmount;
      return `💡 Just £${amountNeeded.toLocaleString()} more to unlock 10% volume discount and get bonus links!`;
    }
    
    if (budgetAmount >= 140000 && budgetAmount < TIER_2_THRESHOLD) {
      const amountNeeded = TIER_2_THRESHOLD - budgetAmount;
      return `🚀 Add £${amountNeeded.toLocaleString()} more to your budget to unlock 15% volume discount (currently enjoying 10%)`;
    }
    
    if (budgetAmount >= 148000 && budgetAmount < TIER_2_THRESHOLD) {
      const amountNeeded = TIER_2_THRESHOLD - budgetAmount;
      return `⭐ Only £${amountNeeded.toLocaleString()} away from maximum 15% volume discount!`;
    }

    return null;
  };

  const getDeliveryWindow = (budgetAmount: number) => {
    if (budgetAmount >= BESPOKE_THRESHOLD) return "Contact for Bespoke Solution";
    if (budgetAmount >= 200000) return "24 months";
    if (budgetAmount >= 150000) return "12 months";
    if (budgetAmount >= 100000) return "10 months";
    if (budgetAmount >= 50000) return "6 months";
    if (budgetAmount >= 19000) return "4 months";
    return "2 months";
  };

  useEffect(() => {
    const budgetNum = parseFloat(budget);
    
    if (market === "other") {
      if (budgetNum >= 5000) {
        const newResults = {
          market,
          budget: budgetNum,
          targetDomain: targetDomain || undefined,
          domainAnalysis: domainAnalysis || undefined,
          deliveryWindow: "Contact for Bespoke Solution",
          showContactSales: true
        };
        setResults(newResults);
        onResultsChange(newResults);
      } else {
        setResults(null);
        onResultsChange(null);
      }
    } else if (budgetNum >= 5000) {
      if (domainAnalysis?.isBlocked) {
        setResults(null);
        onResultsChange(null);
        return;
      }

      const standardCostPerLink = marketRates[market as keyof typeof marketRates];
      const domainMultiplier = domainAnalysis?.priceMultiplier || 1;
      const adjustedCostPerLink = standardCostPerLink * domainMultiplier;
      
      const volumeDiscount = getVolumeDiscount(budgetNum);
      const hasVolumeDiscount = volumeDiscount.rate > 0 && budgetNum < BESPOKE_THRESHOLD;
      const finalCostPerLink = hasVolumeDiscount 
        ? adjustedCostPerLink * (1 - volumeDiscount.rate)
        : adjustedCostPerLink;
      
      const linksCount = Math.floor(budgetNum / finalCostPerLink);
      const standardLinksCount = hasVolumeDiscount ? Math.floor(budgetNum / adjustedCostPerLink) : undefined;
      const bonusLinks = hasVolumeDiscount ? linksCount - standardLinksCount! : undefined;
      
      const deliveryWindow = getDeliveryWindow(budgetNum);
      const hideLinksCount = budgetNum >= BESPOKE_THRESHOLD;
      const hasDomainSurcharge = domainMultiplier > 1;
      const domainSurchargeAmount = hasDomainSurcharge ? Math.round((domainMultiplier - 1) * 100) : undefined;
      
      const newResults = {
        market,
        budget: budgetNum,
        targetDomain: targetDomain || undefined,
        domainAnalysis: domainAnalysis || undefined,
        linksCount: hideLinksCount ? undefined : linksCount,
        deliveryWindow,
        costPerLink: hideLinksCount ? undefined : finalCostPerLink,
        hideLinksCount,
        hasVolumeDiscount,
        standardLinksCount,
        bonusLinks,
        standardCostPerLink: hasVolumeDiscount ? adjustedCostPerLink : undefined,
        discountedCostPerLink: hasVolumeDiscount ? finalCostPerLink : undefined,
        discountPercentage: hasVolumeDiscount ? volumeDiscount.percentage : undefined,
        hasDomainSurcharge,
        domainSurchargeAmount
      };
      
      setResults(newResults);
      onResultsChange(newResults);
    } else {
      setResults(null);
      onResultsChange(null);
    }
  }, [market, budget, domainAnalysis, onResultsChange, targetDomain]);

  const handleCalculate = () => {
    if (results?.showContactSales || (results && results.budget >= BESPOKE_THRESHOLD)) {
      window.openContactModal("bespoke");
    } else if (results) {
      window.openContactModal("calculator");
    }
  };

  const budgetNum = parseFloat(budget);
  const hintMessage = getHintMessage(budgetNum);

  return (
    <div className="max-w-4xl mx-auto mb-20">
      <CalculatorHeader budget={budgetNum} domainAnalysis={domainAnalysis} />

      <div className="bg-gray-100 rounded-b-2xl p-8 border-2 border-t-0 border-gray-300">
        <CalculatorForm
          targetDomain={targetDomain}
          setTargetDomain={setTargetDomain}
          market={market}
          setMarket={setMarket}
          budget={budget}
          setBudget={setBudget}
        />

        <CalculatorMessages
          domainAnalysis={domainAnalysis}
          budgetNum={budgetNum}
          market={market}
          hintMessage={hintMessage}
          TIER_1_THRESHOLD={TIER_1_THRESHOLD}
          TIER_2_THRESHOLD={TIER_2_THRESHOLD}
        />

        <CalculatorResultsComponent
          results={results}
          domainAnalysis={domainAnalysis}
          onCalculate={handleCalculate}
          BESPOKE_THRESHOLD={BESPOKE_THRESHOLD}
        />
      </div>
    </div>
  );
};

export default PricingCalculator;
