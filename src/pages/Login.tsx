import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Role = 'user' | 'admin';

export const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>('user');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login - in real app would call API
    localStorage.setItem('role', role);
    
    if (role === 'admin') {
      navigate('/dashboard');
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gradient-purple via-white to-gradient-green flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-morphing opacity-10" />
      
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl blur" />
        
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-dark">
              Welcome Back
            </h1>
            <p className="text-primary-dark/70 mt-2">
              Sign in to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-primary-purple/20 focus:border-primary-purple focus:outline-none transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-primary-purple/20 focus:border-primary-purple focus:outline-none transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-dark mb-2">
                Role
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('user')}
                  className={`px-4 py-3 rounded-xl border-2 transition-all ${
                    role === 'user'
                      ? 'border-primary-purple bg-primary-purple text-white'
                      : 'border-primary-purple/20 hover:border-primary-purple'
                  }`}
                >
                  User
                </button>
                <button
                  type="button"
                  onClick={() => setRole('admin')}
                  className={`px-4 py-3 rounded-xl border-2 transition-all ${
                    role === 'admin'
                      ? 'border-primary-purple bg-primary-purple text-white'
                      : 'border-primary-purple/20 hover:border-primary-purple'
                  }`}
                >
                  Admin
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary-purple to-primary-green text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}; 