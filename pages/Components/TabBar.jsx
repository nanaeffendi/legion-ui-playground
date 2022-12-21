import {
  Accordion,
  Card,
  Avatar,
  TabBar,
  TabWrapper,
  TabItem
} from 'legion-ui'
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function AccordionPage() {
  const route = useRouter();

  const handleClickTab = () => {
    route.push('https://legiontracker.vercel.app')
  };

  return (
    <div style={{ padding: '24px', marginTop: '24px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3>Tab Bar</h3>
      </div>
      <div style={{ marginBottom: '30px', width: '630px' }}>
        <h4> Horizontal </h4>
        <Card style={{ paddingLeft: '24px' }}>
          <TabWrapper style={{ marginRight: '24px' }} tabName="tabOne">
            <TabItem id="tab4" label="Product" isActive={true} />
            <TabItem id="tab5" label="Detail" icon='Info' isDisabled={true} />
            <TabItem id="tab6" label="Variant" />
            <TabItem id="tab7" label="Color Option" badgeNumber='4' />
            <TabItem id="tab8" label="Link Action" onClick={handleClickTab} />
            <TabItem id="tab9" label="Term and Condition" />
          </TabWrapper>
        </Card>
      </div>

      <div style={{ marginBottom: '30px', width: '630px' }}>
        <h4> Vertical </h4>
        <Card style={{ paddingLeft: '24px' }}>
          <TabWrapper style={{ marginRight: '24px' }} variant="vertical" tabName="tabTwo">
            <TabItem id="tab10" label="Product" isActive={true} />
            <TabItem id="tab11" label="Detail" icon='Info' />
            <TabItem id="tab12" label="Variant" />
            <TabItem id="tab13" label="Color Option" badgeNumber='4' />
          </TabWrapper>
        </Card>
      </div>

      <div style={{ padding: '12px' }}>
        <h4> Horizontal </h4>
        <Card style={{ padding: '0 24px', minHeight: '500px' }}>
          <TabWrapper tabName="tabThree">
            <TabItem
              id="tab1"
              label="Product Review"
              isActive={true} 
            >
              <h3>Wulling Air Ev</h3>
              <div>
                <h4>DRIVE EASY, MOVE FREELY</h4>
                <p>
                  Desain compact Wuling Air ev menawarkan smart driving experience yang memudahkan dan mendukung mobilitas Anda di setiap momen perjalanan Anda di perkotaan.
                </p>
              </div>
              <Image
                src="https://situswebsite.com/wp-content/uploads/2022/07/wuling-air-EV-drive-easy.webp"
                width="300"
                height="150"
              />
            </TabItem>
            <TabItem
              id="tab2"
              label="Description"
              icon='FileText'
            >
              <h3>Mobil Listrik Wuling Air ev</h3>
              <p>
                Mobil listrik Wuling Air ev berbalut tampilan yang begitu energik dan segar untuk mobilitas para urban di perkotaan besar. Kehadirannya pun memberikan nilai tersendiri untuk penggemar setia Wuling. Melalui pesan yang kuat pada tampilannya yang unik dan inspiratif, Wuling Air ev adalah pilihan cerdas untuk gaya hidup cerdas masa kini. Electrify Your World, Shaping The New Era of Ev!
              </p>
            </TabItem>
            <TabItem
              id="tab3"
              label="Feature and Specification"
              badgeNumber='3'
            >
              <ul>
                <li>IoV atau Wuling Remote Control App</li>
                <li>Keyless Entry Remote & Smart Start System</li>
                <li>Multifunction Steering Wheel</li>
                <li>Dual Screen Terintegrasi yang Informatif</li>
              </ul>
            </TabItem>
          </TabWrapper>
        </Card>
      </div>

      <div style={{ padding: '12px' }}>
        <h4> Vertical </h4>
        <Card style={{ paddingLeft: '24px', minHeight: '500px', background: 'white', }}>
          <TabWrapper tabName="tabFour" variant="vertical">
            <TabItem
              id="tab14"
              label="Product Review"
              isActive={true} 
            >
              <h3>Wulling Air Ev</h3>
              <div>
                <h4>DRIVE EASY, MOVE FREELY</h4>
                <p>
                  Desain compact Wuling Air ev menawarkan smart driving experience yang memudahkan dan mendukung mobilitas Anda di setiap momen perjalanan Anda di perkotaan.
                </p>
              </div>
              <Image
                src="https://situswebsite.com/wp-content/uploads/2022/07/wuling-air-EV-drive-easy.webp"
                width="300"
                height="150"
              />

            </TabItem>
            <TabItem
              id="tab15"
              label="Description"
              icon='FileText'
            >
              <h3>Mobil Listrik Wuling Air ev</h3>
              <p>
                Mobil listrik Wuling Air ev berbalut tampilan yang begitu energik dan segar untuk mobilitas para urban di perkotaan besar. Kehadirannya pun memberikan nilai tersendiri untuk penggemar setia Wuling. Melalui pesan yang kuat pada tampilannya yang unik dan inspiratif, Wuling Air ev adalah pilihan cerdas untuk gaya hidup cerdas masa kini. Electrify Your World, Shaping The New Era of Ev!
              </p>
            </TabItem>
            <TabItem
              id="tab16"
              label="Feature and Specification"
              badgeNumber='3'
            >
              <ul>
                <li>IoV atau Wuling Remote Control App</li>
                <li>Keyless Entry Remote & Smart Start System</li>
                <li>Multifunction Steering Wheel</li>
                <li>Dual Screen Terintegrasi yang Informatif</li>
              </ul>
            </TabItem>
          </TabWrapper>
        </Card>
      </div>
    </div>
  )
}
