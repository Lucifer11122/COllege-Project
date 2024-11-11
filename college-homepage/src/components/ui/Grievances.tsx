import React, { useState } from 'react';

export const Grievances: React.FC = () => {
  const [issue, setIssue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Issue Submitted:', issue);
    alert("Your issue has been submitted. We'll handle it.");
    setIssue('');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl space-y-6">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">How may I help you?</h2>
          <p className="text-gray-500 text-sm mb-6">Please describe your issue below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="issue" className="text-sm font-medium text-gray-700">Your Issue</label>
            <textarea
              id="issue"
              name="issue"
              placeholder="Describe your issue here..."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              required
              className="w-full h-40 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Grievances;
