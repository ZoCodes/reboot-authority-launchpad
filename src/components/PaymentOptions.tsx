
const PaymentOptions = () => {
  return (
    <div className="bg-light-grey rounded-2xl p-10 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 text-center text-reboot-navy">Flexible Payment Options</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 bg-reboot-pink rounded"></div>
          </div>
          <h4 className="font-semibold text-reboot-navy mb-2">Pay upfront in full</h4>
          <p className="text-gray-600 text-sm">Single payment, maximum savings</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 bg-reboot-pink rounded"></div>
          </div>
          <h4 className="font-semibold text-reboot-navy mb-2">50/50 split</h4>
          <p className="text-gray-600 text-sm">Half upfront, half on completion</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-reboot-pink/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 bg-reboot-pink rounded"></div>
          </div>
          <h4 className="font-semibold text-reboot-navy mb-2">50/25/25 tiered</h4>
          <p className="text-gray-600 text-sm">Staged payments to completion milestones</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
