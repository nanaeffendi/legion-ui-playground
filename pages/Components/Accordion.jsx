import { 
  Accordion,
  Card,
  Avatar, 
} from 'legion-ui'

export default function AccordionPage() {
  return (
    <div style={{ padding: '24px', marginTop: '24px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3>Accordion</h3>
      </div>
      <div style={{ padding: '12px' }}>
        <Accordion id="accordion-one" title="Accordion with left icon" leftIcon="Home" css={{ marginBottom: '12px' }}>
          This is the accordion body of the accordion item, shown by default, and can be filled with text
        </Accordion>
        <Accordion id="accordion-two" title="Accordion without icon" css={{ marginBottom: '12px' }}>
          <Card css={{ padding: '24px' }}>
            <Avatar size="large" src="https://i.pinimg.com/736x/53/be/4d/53be4d0426efb540ec5ec14db3ae422a.jpg" />
            <div style={{ marginTop: '12px' }}>This is the Accordion body with custom content, can be filled with others component like card, avatar, text, etc.</div>
          </Card>
        </Accordion>
        <Accordion
          id="accordion-three"
          title="Accordion isBordered false"
          css={{ marginBottom: '12px' }}
          isBordered={false}
        >
          Accordion content - isBordered set to false
        </Accordion>
      </div>
    </div>
  )
}
