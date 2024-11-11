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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">How may I help you?</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <textarea
          name="issue"
          placeholder="Describe your issue here..."
          value={issue}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setIssue(e.target.value)}
          required
          className="w-full h-40 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Grievances;
