import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">
            Welcome to <span className="text-blue-600">Foxsay</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Your secure platform for connecting and sharing. Join our community today and start your journey with us.
          </p>
          <div className="space-x-4">
            <Link
              href="/auth/signup"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/auth/login"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-blue-600 text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
            <p className="text-gray-600">Your security is our top priority. We use state-of-the-art encryption to protect your data.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-blue-600 text-4xl mb-4">⚡️</div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Experience blazing fast performance with our optimized platform.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="text-blue-600 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Community First</h3>
            <p className="text-gray-600">Join a thriving community of users who share your interests and passions.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
