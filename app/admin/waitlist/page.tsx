'use client'

import { useState, useEffect } from 'react'

interface WaitlistEntry {
  email: string
  timestamp: string
  userAgent: string
  ip: string
  filename: string
  size: number
  uploadedAt: string
}

export default function WaitlistAdminPage() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/waitlist/admin', {
        headers: {
          'Authorization': `Bearer ${password}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setEntries(data.entries || [])
        setIsAuthenticated(true)
        setError('')
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Invalid credentials' }))
        setError(errorData.error || 'Unauthorized. Check your password.')
        setIsAuthenticated(false)
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    fetchEntries()
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Waitlist Admin
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4D03F]"
                placeholder="Enter admin password"
                required
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] text-gray-900 font-semibold py-2 px-4 rounded-lg hover:from-[#F1C40F] hover:to-[#D4AC0D] transition-all disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Access Waitlist'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#F4D03F] to-[#F1C40F] p-6">
            <h1 className="text-3xl font-bold text-gray-900">Waitlist Admin</h1>
            <p className="text-gray-700 mt-2">
              Total signups: <span className="font-semibold">{entries.length}</span>
            </p>
          </div>
          
          <div className="p-6">
            <button
              onClick={() => fetchEntries()}
              className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Refresh Data
            </button>

            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin h-8 w-8 border-4 border-[#F4D03F] border-t-transparent rounded-full mx-auto"></div>
                <p className="mt-2 text-gray-600">Loading waitlist entries...</p>
              </div>
            ) : entries.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No waitlist entries yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                        Email
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                        Signed Up
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                        User Agent
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                        IP Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {entries.map((entry, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                          {entry.email}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-600">
                          {new Date(entry.timestamp).toLocaleString()}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-600 text-sm max-w-xs truncate">
                          {entry.userAgent}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 text-gray-600">
                          {entry.ip}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {entries.length > 0 && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Export Options</h3>
                <button
                  onClick={() => {
                    const csvContent = "data:text/csv;charset=utf-8," + 
                      "Email,Timestamp,IP,User Agent\n" +
                      entries.map(entry => 
                        `"${entry.email}","${entry.timestamp}","${entry.ip}","${entry.userAgent}"`
                      ).join("\n");
                    
                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement("a");
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("download", `lymo-waitlist-${new Date().toISOString().split('T')[0]}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
                >
                  Download as CSV
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
