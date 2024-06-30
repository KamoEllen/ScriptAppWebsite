import Accordion2 from '@/components/faq-section/Accordion2';

export default function FaqTwo() {
    return (
        <>
            <section className="layout-pt-sm layout-pb-xl bg-gray-100">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Have a question?</h2>
                        <p className="text-lg text-gray-600 mb-12">
                            Welcome to Script App's FAQ section! Find answers to commonly asked questions below.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-full lg:w-3/4">
                            <div className="accordion md:mt-12">
                                <Accordion2 title="What features does Script App offer?" content="Script App offers a variety of features designed to simplify the life of script supervisors. These include importing scripts, editing them, creating pages, auto-filling forms, and exporting or sending scripts via email. It's all interconnected to eliminate the need for manual retyping and streamline your workflow." />
                                <Accordion2 title="How does the 24-hour free trial work?" content="You can enjoy a 24-hour free trial of Script App to explore all its features. During this period, you can import scripts, edit them, and use all functionalities without any charge. If you decide to continue using Script App after the trial, you can subscribe for only £20 per month." />
                                <Accordion2 title="Can I skip the trial and subscribe directly?" content="Yes, if you prefer, you can skip the 24-hour trial and subscribe directly by paying £20 per month. This allows you to start using Script App immediately without waiting for the trial period to end." />
                                <Accordion2 title="How do I pay for Script App?" content="Payment for Script App is handled through a secure online payment system. You can subscribe using a credit card or other accepted payment methods. Payments are processed monthly at the rate of £20 per month." />
                                <Accordion2 title="Can I suggest new features for Script App?" content="Absolutely! We value your feedback and suggestions for improving Script App. If you have ideas for new features or improvements, please reach out to our support team. We are committed to improving Script App based on user input." />
                                <Accordion2 title="How can I export or send scripts via email?" content="Exporting or sending scripts via email is simple with Script App. Once you've edited or formatted your script, you can export it in various formats or directly send it via email to relevant stakeholders. This feature ensures efficient communication and collaboration during production." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
