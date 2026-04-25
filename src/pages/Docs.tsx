import { FileText, Code, Settings, Terminal } from 'lucide-react';

const Docs = () => {
  const sections = [
    {
      title: 'Installation',
      icon: <Settings className="w-6 h-6" />,
      items: ['Driver Setup', 'Firmware Flashing', 'Environment Variables']
    },
    {
      title: 'Usage Guides',
      icon: <Terminal className="w-6 h-6" />,
      items: ['WiFi Reconnaissance', 'HID Payload Deployment', 'Packet Injection']
    },
    {
      title: 'API Reference',
      icon: <Code className="w-6 h-6" />,
      items: ['Web Interface API', 'Serial Communication', 'Python Libraries']
    },
    {
      title: 'Troubleshooting',
      icon: <FileText className="w-6 h-6" />,
      items: ['Common Error Codes', 'Hardware Resets', 'Support Tickets']
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 uppercase tracking-tighter text-[#00FF41]">Documentation</h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Everything you need to master your Arrow Tech equipment. From initial setup to advanced scripting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-[#121212] border border-white/5 p-8 hover:border-[#00FF41]/20 transition-all group">
              <div className="text-[#00FF41] mb-6 group-hover:scale-110 transition-transform origin-left">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400 hover:text-[#00FF41] cursor-pointer transition-colors">
                    <span className="w-1 h-1 bg-gray-700 mr-3" />
                    <span className="font-mono text-sm uppercase tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-black border border-white/5 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase">Need personalized support?</h3>
            <p className="text-gray-500 font-mono text-xs">Our technical team is available for enterprise consultation.</p>
          </div>
          <button className="mt-6 md:mt-0 cyber-button">Open Support Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default Docs;
