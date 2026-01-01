import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Info, FileText, CheckCircle2, AlertCircle, Building2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const CommissionDisclosure = () => {
    const commissionStats = [
        { category: 'Equity Funds', range: '0.50% - 1.25%', type: 'Trail' },
        { category: 'Hybrid Funds', range: '0.50% - 1.10%', type: 'Trail' },
        { category: 'Debt Funds', range: '0.10% - 0.80%', type: 'Trail' },
        { category: 'Liquid / Overnight', range: '0.05% - 0.15%', type: 'Trail' },
    ];

    const disclosurePoints = [
        {
            icon: Building2,
            title: 'Distributor Disclosure',
            content: 'Investment Options (Keval Ashar) is an AMFI Registered Mutual Fund Distributor (ARN-249212). We act as an intermediary between investors and Asset Management Companies (AMCs).'
        },
        {
            icon: Info,
            title: 'Commission Model',
            content: 'In accordance with SEBI regulations, we follow a trail-based commission model. We do not charge any upfront commission or transaction fees from our clients. The commission is paid directly by the AMCs.'
        },
        {
            icon: CheckCircle2,
            title: 'Regular vs Direct Plans',
            content: 'We provide platform and services for Regular Plans of Mutual Fund schemes. Investors have the option to invest in Direct Plans through AMC websites or other platforms if they prefer lower expense ratios with no distributor involvement.'
        },
        {
            icon: FileText,
            title: 'Scheme Selection',
            content: 'Our scheme recommendations are based on our internal research, the investor\'s risk profile, and financial goals. The commission rates vary across AMCs and schemes and do not influence our recommendations.'
        },
        {
            icon: AlertCircle,
            title: 'Conflict of Interest',
            content: 'We strive to minimize any conflict of interest and prioritize the client\'s financial well-being. Detailed commission disclosures for specific schemes are available upon request.'
        }
    ];

    return (
        <>
            <Helmet>
                <title>Commission Disclosure - Investment Options</title>
                <meta
                    name="description"
                    content="Commission disclosure for Investment Options. Learn about our mutual fund distribution commission structure as an AMFI Registered Distributor."
                />
            </Helmet>

            <PageHeader
                badge="Regulatory Disclosure"
                title="Commission Disclosure"
                description="Transparency is the foundation of trust. Here is how we are compensated for our services as a Mutual Fund Distributor."
                icon={FileText}
            />

            <section className="section bg-white">
                <div className="container-custom max-w-5xl">
                    {/* Intro Note */}
                    <div className="mb-16 bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl">
                        <p className="text-blue-900 leading-relaxed font-medium">
                            Pursuant to SEBI Circular No. SEBI/IMD/CIR No. 4/168230/09 dated June 30, 2009, following are the details of the commission earned by Investment Options from various Asset Management Companies (AMCs) for mutual fund distribution.
                        </p>
                    </div>

                    {/* Disclosure Points */}
                    <div className="grid gap-8 mb-20">
                        {disclosurePoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 hover:shadow-xl transition-all group"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                        <point.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy mb-3">{point.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{point.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Commission Table */}
                    <div className="bg-navy rounded-[3rem] p-8 md:p-12 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <div className="relative">
                            <h3 className="text-3xl font-bold mb-8 text-center">Indicative Trail Commission Structure</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="py-6 px-4 text-primary font-black uppercase tracking-widest text-xs">Asset Category</th>
                                            <th className="py-6 px-4 text-primary font-black uppercase tracking-widest text-xs">1st Year Trail (Range)</th>
                                            <th className="py-6 px-4 text-primary font-black uppercase tracking-widest text-xs">Subsequent Years Trail</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {commissionStats.map((stat, i) => (
                                            <tr key={stat.category} className="group hover:bg-white/5 transition-colors">
                                                <td className="py-6 px-4 font-bold text-lg">{stat.category}</td>
                                                <td className="py-6 px-4 text-gray-400 font-medium">{stat.range}</td>
                                                <td className="py-6 px-4 text-primary font-bold">{stat.range}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-8 text-[11px] text-white/40 leading-relaxed text-center italic">
                                * The rates mentioned above are indicative and subject to change by AMCs from time to time. The exact commission earned varies for each scheme and AMC. These rates represent the broad range for the respective categories.
                            </p>
                        </div>
                    </div>

                    {/* CTA / Contact */}
                    <div className="mt-20 text-center">
                        <p className="text-gray-500 font-medium mb-6">
                            For any further queries regarding our commission structure or specific scheme-wise details:
                        </p>
                        <a
                            href="mailto:info@investmentoptions.co.in"
                            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-600 transition-all shadow-lg hover:shadow-primary/30"
                        >
                            <Info className="w-5 h-5" />
                            Request Detailed Disclosure
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CommissionDisclosure;
