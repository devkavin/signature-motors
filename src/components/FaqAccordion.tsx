import { faqItems } from '@/data/inventory';
import { AccordionItem } from '@/components/ui/AccordionItem';

export function FaqAccordion() {
  return (
    <section id="faq" className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} title={item.question}>
            <p className="text-sm text-slate-700">{item.answer}</p>
          </AccordionItem>
        ))}
      </div>
    </section>
  );
}
