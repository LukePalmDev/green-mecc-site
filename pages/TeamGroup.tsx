import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DEPARTMENTS_INFO, TEAM_STRUCTURE } from '../constants';
import { Reveal } from '../components/ui/Reveal';
import Transition from '../components/Transition';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Linkedin } from 'lucide-react';

// Mappa gli id dei DEPARTMENTS_INFO ai titoli in TEAM_STRUCTURE
const GROUP_ID_TO_TEAM: Record<string, string> = {
  management: 'Management',
  chassis: 'Chassis & Subsystem',
  drivetrain: 'Drivetrain',
  electronics: 'Strategy & Electronics',
  aerodynamics: 'Aerodynamics',
  communication: 'Communication',
};

const TeamGroup: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();

  const department = DEPARTMENTS_INFO.find((d) => d.id === groupId);
  const teamTitle = groupId ? GROUP_ID_TO_TEAM[groupId] : undefined;
  const teamDept = teamTitle ? TEAM_STRUCTURE.find((d) => d.title === teamTitle) : undefined;

  if (!department) {
    return (
      <Transition>
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
          <div className="text-center">
            <p className="text-stone-600 dark:text-gray-400 text-xl">Group not found.</p>
            <Link to="/about" className="text-emerald-900 font-mono text-sm mt-4 inline-block hover:underline">
              ← Back to About
            </Link>
          </div>
        </div>
      </Transition>
    );
  }

  return (
    <Transition>
      <div className="bg-white dark:bg-black min-h-screen text-stone-900 dark:text-white pt-32 pb-20 transition-colors duration-300 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Back Button */}
          <Reveal>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-emerald-900 font-mono text-xs uppercase tracking-widest mb-16 hover:gap-4 transition-all duration-300"
            >
              <ArrowLeft size={14} />
              Back to About
            </Link>
          </Reveal>

          {/* Header */}
          <div className="mb-20">
            <Reveal>
              <h1 className="font-display font-black text-6xl md:text-9xl text-stone-900 dark:text-white mb-2">
                {department.title.toUpperCase()}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-emerald-900 font-mono border-l-4 border-emerald-900 pl-4 max-w-xl">
                {department.description}
              </p>
            </Reveal>
          </div>

          {/* Members Grid */}
          {teamDept && teamDept.members.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamDept.members.map((member, memberIndex) => (
                <Reveal key={memberIndex} delay={memberIndex * 0.08}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative bg-stone-200 dark:bg-black/40 rounded-xl overflow-hidden"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={member.image}
                        alt={`${member.name} ${member.surname}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                      {/* Overlay Links */}
                      <div className="absolute inset-0 bg-green-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="p-2 bg-white rounded-full text-green-900 hover:scale-110 transition-transform"
                          >
                            <Mail size={20} />
                          </a>
                        )}
                        <a href="#" className="p-2 bg-white rounded-full text-green-900 hover:scale-110 transition-transform">
                          <Linkedin size={20} />
                        </a>
                      </div>
                    </div>
                    <div className="p-4 border-t border-stone-300 dark:border-white/10">
                      <h4 className="font-display font-bold text-lg text-stone-900 dark:text-white uppercase">
                        {member.surname}
                      </h4>
                      <p className="text-stone-600 dark:text-gray-400 font-light">{member.name}</p>
                      {member.role && (
                        <p className="text-emerald-900 text-xs uppercase tracking-widest mt-2 font-bold">
                          {member.role}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <p className="text-stone-600 dark:text-gray-400 text-xl font-light">
                Members information coming soon.
              </p>
            </Reveal>
          )}

        </div>
      </div>
    </Transition>
  );
};

export default TeamGroup;
