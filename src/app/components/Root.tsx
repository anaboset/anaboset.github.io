import { Outlet } from 'react-router';
import { Navigation } from './Navigation';

export function Root() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2026 Ana Boset. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
