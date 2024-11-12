"use client";

import { RefreshCw } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface WaitlistEntry {
  _id: string;
  fullname: string;
  email: string;
}

const WaitlistDisplay = () => {
	const [entries, setEntries] = useState<WaitlistEntry[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
  
	const fetchWaitlist = useCallback(async () => {
	  setLoading(true);
	  try {
		const response = await fetch('/api/waitlist');
		if (!response.ok) {
		  throw new Error('Failed to fetch waitlist');
		}
		const data = await response.json();
		console.log('Fetched waitlist data:', data); // Debug log
		setEntries(data);
		setError(null);
	  } catch (err) {
		console.error('Fetch error:', err); // Debug log
		setError(err instanceof Error ? err.message : 'Failed to fetch waitlist');
	  } finally {
		setLoading(false);
	  }
	}, []);
  
	useEffect(() => {
	  fetchWaitlist();
	}, [fetchWaitlist]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#164CA4]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        Error: {error}
      </div>
    );
  }

  if (!entries.length) {
    return (
      <div className="text-center p-4 text-gray-500">
        No entries in the waitlist yet.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-[#164CA4] mb-6">Waitlist Entries</h2>
	  
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-[#164CA4] text-white">
            <tr>
              <th className="px-6 py-3 text-left">Full Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {entries.map((entry) => (
              <tr key={entry._id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{entry.fullname}</td>
                <td className="px-6 py-4">{entry.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{entry._id}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="px-6 py-4 text-sm text-gray-500">
                Total Entries: {entries.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
	  <button
          onClick={() => fetchWaitlist()}
          className="flex items-center gap-2 px-4 py-2 mt-10 bg-[#164CA4] text-white rounded-md hover:bg-[#0E3A8B]"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh List
        </button>
    </div>
  );
};

export default WaitlistDisplay;