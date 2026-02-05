import { motion } from 'motion/react';
import { Calendar, Clock, Trophy, Users, ArrowRight, MapPin } from 'lucide-react';

interface HackathonListProps {
  onSelectHackathon: (hackathonId: string) => void;
}

export function HackathonList({ onSelectHackathon }: HackathonListProps) {
  const hackathons = [
    {
      id: 'codeblitz-2026',
      name: 'CODEBLITZ 2026',
      tagline: '8-Hour Offline Cyber Security Hackathon',
      date: 'March 20, 2026',
      time: '9:00 AM - 4:00 PM',
      venue: 'ECA Auditorium & Labs',
      prizePool: '₹10,000',
      teamSize: '2-4 Members',
      status: 'registration-open',
      registrationFee: '₹100',
      gradient: 'from-blue-600 to-indigo-600',
      borderColor: 'border-blue-100',
    },
    {
      id: 'securethon-2026',
      name: 'SECURETHON 2026',
      tagline: 'Advanced Penetration Testing Challenge',
      date: 'June 15, 2026',
      time: '10:00 AM - 6:00 PM',
      venue: 'ECA Computer Labs',
      prizePool: '₹15,000',
      teamSize: '2-4 Members',
      status: 'coming-soon',
      registrationFee: '₹250',
      gradient: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-100',
    },
    {
      id: 'cyberquest-2026',
      name: 'CYBERQUEST 2026',
      tagline: 'Capture The Flag Championship',
      date: 'September 10, 2026',
      time: '9:00 AM - 8:00 PM',
      venue: 'ECA Auditorium',
      prizePool: '₹20,000',
      teamSize: '3-5 Members',
      status: 'coming-soon',
      registrationFee: 'TBA',
      gradient: 'from-green-600 to-teal-600',
      borderColor: 'border-green-100',
    },
    {
      id: 'hackdefense-2026',
      name: 'HACKDEFENSE 2026',
      tagline: 'Network Security & Defense Systems',
      date: 'December 5, 2026',
      time: '9:00 AM - 5:00 PM',
      venue: 'ECA Innovation Lab',
      prizePool: '₹12,000',
      teamSize: '2-4 Members',
      status: 'coming-soon',
      registrationFee: 'TBA',
      gradient: 'from-orange-600 to-red-600',
      borderColor: 'border-orange-100',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'registration-open':
        return (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-700 font-medium">Registration Open</span>
          </div>
        );
      case 'coming-soon':
        return (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
            <span className="text-xs text-blue-700 font-medium">Coming Soon</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative py-20 lg:py-32 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Our Hackathons
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our lineup of exciting cyber security hackathons and challenges. From beginner-friendly events to advanced competitions, there's something for everyone.
          </p>
        </motion.div>

        {/* Hackathon Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onSelectHackathon(hackathon.id)}
              className={`group relative p-8 bg-white border ${hackathon.borderColor} rounded-2xl hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 shadow-sm`}
            >
              {/* Status Badge */}
              <div className="mb-4">
                {getStatusBadge(hackathon.status)}
              </div>

              {/* Hackathon Name */}
              <h3 className={`text-3xl font-bold mb-3 bg-gradient-to-r ${hackathon.gradient} bg-clip-text text-transparent`}>
                {hackathon.name}
              </h3>
              
              <p className="text-gray-600 text-lg mb-6">{hackathon.tagline}</p>

              {/* Details Grid */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>{hackathon.date}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-indigo-500" />
                  <span>{hackathon.time}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <span>{hackathon.venue}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <Users className="w-5 h-5 text-green-500" />
                  <span>Team Size: {hackathon.teamSize}</span>
                </div>
              </div>

              {/* Prize Pool & Registration Fee */}
              <div className="flex items-center justify-between mb-6 pt-6 border-t border-gray-100">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Prize Pool</div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${hackathon.gradient} bg-clip-text text-transparent`}>
                    {hackathon.prizePool}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Registration Fee</div>
                  <div className="text-xl font-bold text-gray-900">{hackathon.registrationFee}</div>
                </div>
              </div>

              {/* View Details Button */}
              <button
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${hackathon.gradient} hover:opacity-90 text-white rounded-lg font-medium transition-all shadow-md`}
              >
                View Details
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-white border border-blue-100 rounded-2xl text-center shadow-lg"
        >
          <Trophy className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Why Participate in Our Hackathons?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Real-World Experience</h4>
              <p className="text-gray-600 text-sm">
                Work on practical security challenges that mirror real industry scenarios
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-indigo-600 mb-2">Learn & Network</h4>
              <p className="text-gray-600 text-sm">
                Collaborate with peers, learn from mentors, and build valuable connections
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-600 mb-2">Win Prizes & Recognition</h4>
              <p className="text-gray-600 text-sm">
                Compete for exciting cash prizes, certificates, and career opportunities
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}