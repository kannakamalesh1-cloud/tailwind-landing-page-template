
export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="absolute top-0 z-30 w-full">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Simple</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex min-h-screen items-center justify-center px-4 pt-16">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-10 blur-3xl"></div>
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-tr from-green-500 to-cyan-500 opacity-10 blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="w-full max-w-md">
          <div className="rounded-2xl bg-white p-8 shadow-2xl">
            {children}
          </div>
          
          {/* Additional info */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
            <p className="mt-2">
              Need help? <a href="#" className="text-blue-600 hover:text-blue-800">Contact support</a>
            </p>
          </div>
        </div>

        {/* Side illustration (hidden on mobile) */}
        <div className="hidden lg:block lg:ml-16 xl:ml-24">
          <div className="w-80 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-2xl">
            {/* Terminal header */}
            <div className="mb-6 flex items-center">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 flex-1">
                <span className="text-sm font-medium text-gray-300">terminal</span>
              </div>
            </div>
            
            {/* Terminal content */}
            <div className="font-mono text-sm">
              <div className="mb-2">
                <span className="text-green-400">$</span>
                <span className="ml-2 text-white">simple auth login</span>
              </div>
              <div className="mb-2 text-gray-400">
                Authenticating with Simple...
              </div>
              <div className="mb-2">
                <span className="text-cyan-400">✓</span>
                <span className="ml-2 text-gray-300">Connected to server</span>
              </div>
              <div className="mb-2">
                <span className="text-cyan-400">✓</span>
                <span className="ml-2 text-gray-300">Session verified</span>
              </div>
              <div className="mt-4">
                <span className="text-green-400">$</span>
                <span className="ml-2 text-white">simple status</span>
              </div>
              <div className="mt-2 text-gray-400">
                Status: Authenticated ✓
              </div>
            </div>
            
            {/* Code comment */}
            <div className="mt-8 border-t border-gray-700 pt-4">
              <p className="text-xs text-gray-500">
                // Secure authentication powered by Simple CLI
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
