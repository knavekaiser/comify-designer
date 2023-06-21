import React from "react";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import s from "./style.module.scss";

function ServiceProvider({ sp, setSp }) {
  const [providers, setProviders] = useState([
    {
      id: "poly",
      name: "POLY",
      photo: "/assets/service_providers/poly.png",
    },
    {
      id: "zoom",
      name: "Zoom Rooms",
      photo: "/assets/service_providers/zoom.png",
    },
    {
      id: "byod",
      name: "BYOD",
      photo: "/assets/service_providers/teams.png",
    },
  ]);
  return (
    <div className={s.serviceProviders}>
      <h1>Please select your video conferencing service provider</h1>
      <div className={s.providers}>
        {providers.map((item) => (
          <Card
            key={item.id}
            className={s.serviceProvider}
            onClick={() => (sp?.id === item.id ? setSp(null) : setSp(item))}
            active={sp?.id === item.id}
          >
            <img src={item.photo} />
            <h2>{item.name}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
}

function RoomSelection({ room, setRoom }) {
  const [rooms, setRooms] = useState([
    {
      id: "small_room",
      name: "Small Room",
      photo: "/assets/rooms/small_room.png",
      capacity: "1-2 People",
      size: "5ft x 5ft",
    },
    {
      id: "medium_room",
      name: "Medium Room",
      photo: "/assets/rooms/medium_room.png",
      capacity: "3-7 People",
      size: "10ft x 15ft",
    },
    {
      id: "large_room",
      name: "Large Room",
      photo: "/assets/rooms/large_room.png",
      fullPhoto: "/assets/rooms/large_room_full.png",
      capacity: "7-12 People",
      size: "15ft x 20ft",
    },
  ]);
  return (
    <div className={s.roomSelection}>
      <h1>Seat Number And Room Type Of Your Conferencing Room</h1>
      <div className={s.rooms}>
        {rooms.map((item) => (
          <Card
            key={item.id}
            className={s.room}
            onClick={() =>
              room?.id === item.id ? setRoom(null) : setRoom(item)
            }
            active={room?.id === item.id}
          >
            <img src={item.photo} />
            <h2>{item.name}</h2>
            <hr />
            <p>{item.capacity}</p>
            <p>{item.size}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PlatformSelection({ platform, setPlatform }) {
  const [platforms, setPlatforms] = useState([
    {
      id: "team_on_windows",
      name: "Teams Room on Windows",
      description:
        "A Microsoft Teams Rooms system on Windows utilises a dedicated Windows PC paired with Teams Rooms certified audio & video components.",
    },
    {
      id: "team_on_android",
      name: "Teams Room on Android",
      description:
        "A Microsoft Teams Rooms ecosystem on Android utilises a host of different collaboration devices that are all running on Android OS.",
    },
  ]);
  return (
    <div className={s.platformSelection}>
      <h1>Please select your preferred product form</h1>
      <div className={s.platforms}>
        {platforms.map((item) => (
          <Card
            key={item.id}
            className={s.platform}
            onClick={() => setPlatform(item)}
            active={platform?.id === item.id}
          >
            <h2>{item.name}</h2>
            <hr />
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function KitSelection({ room, kit, setKit }) {
  const [kits, setKits] = useState([
    {
      id: "poly20",
      name: "Poly 20",
      photo: "/assets/kits/poly20.jpg",
      preview: "/assets/kits/poly20_preview.png",
    },
    {
      id: "poly40",
      name: "Poly 40",
      photo: "/assets/kits/poly40.jpg",
      preview: "/assets/kits/poly40_preview.png",
    },
    {
      id: "poly60",
      name: "Poly 60",
      photo: "/assets/kits/poly60.jpg",
      preview: "/assets/kits/poly60_preview.png",
    },
  ]);
  return (
    <div className={s.kitSelection}>
      <div className={s.kitPreview}>
        <h1>Select your Core Kit to start</h1>
        <div className={s.imageWrapper}>
          <img src={room.fullPhoto} />
          {kit && <img src={kit.preview} />}
        </div>
      </div>
      <div className={s.kits}>
        {kits.map((item) => (
          <ListCard
            key={item.id}
            className={s.kit}
            onClick={() => (kit?.id === item.id ? setKit(null) : setKit(item))}
            active={kit?.id === item.id}
          >
            <img src={item.photo} />
            <h2>{item.name}</h2>
          </ListCard>
        ))}
      </div>
    </div>
  );
}

function ComponentsSelection({ room, kit, components, setComponents }) {
  const [items, setItems] = useState([
    {
      id: "polyE70",
      name: "Poly E70",
      photo: "/assets/components/poly_e70.png",
      preview: "/assets/components/poly_e70_preview.png",
      category: "",
      sku: "UVC84-CP965-HYE65",
      qty: 1,
      description:
        "• 1x UVC84 4K, 12x optical USB PTZ camera with power adapter, cables and wall mount; \n• 1x VCR20 remote control \n• 1x CP965 conference phone \n• 1x 7.5m network cable \n• 1 set of CPW65",
    },
  ]);
  return (
    <div className={s.kitSelection}>
      <div className={s.kitPreview}>
        <h1>Choose Your Preferred Peripherals</h1>
        <div className={s.imageWrapper}>
          <img src={room.fullPhoto} />
          <img src={kit.preview} />
          {components.map((item) => (
            <img key={item.id} src={item.preview} />
          ))}
        </div>
      </div>
      <div className={s.kits}>
        {items.map((item) => (
          <ListCard
            key={item.id}
            className={s.kit}
            onClick={() =>
              components?.find((i) => i.id === item.id)
                ? setComponents((prev) => prev.filter((i) => i.id !== item.id))
                : setComponents((prev) => [...prev, item])
            }
            active={components?.find((i) => i.id === item.id)}
          >
            <img src={item.photo} />
            <h2>{item.name}</h2>
            <p className={s.category}>{item.category}</p>
          </ListCard>
        ))}
      </div>
    </div>
  );
}

function AccessorySelection({ room, kit, components, setComponents }) {
  const [items, setItems] = useState([
    {
      id: "poly_acc_poe",
      name: "Poly Power Supply",
      photo: "/assets/components/poly_acc_poe.jpg",
      sku: "UVC84-CP965-HYE65",
      qty: 1,
      description:
        "• 1x UVC84 4K, 12x optical USB PTZ camera with power adapter, cables and wall mount; \n• 1x VCR20 remote control \n• 1x CP965 conference phone \n• 1x 7.5m network cable \n• 1 set of CPW65",
    },
    {
      id: "poly_acc_usb_ext",
      name: "Poly USB Extension Cord",
      photo: "/assets/components/poly_acc_usb_ext.jpg",
      sku: "PONH-YHRT-CPW65",
      qty: 1,
      description:
        "• 1x UVC84 4K, 12x optical USB PTZ camera with power adapter, cables and wall mount; \n• 1x VCR20 remote control \n• 1x CP965 conference phone \n• 1x 7.5m network cable \n• 1 set of CPW65",
    },
    {
      id: "poly_trio_c60",
      name: "Poly Trio",
      photo: "/assets/components/poly_trio_c60.jpg",
      sku: "MOIU-RTGD-NJHS57",
      qty: 1,
      description:
        "• 1x UVC84 4K, 12x optical USB PTZ camera with power adapter, cables and wall mount; \n• 1x VCR20 remote control \n• 1x CP965 conference phone \n• 1x 7.5m network cable \n• 1 set of CPW65",
    },
  ]);
  return (
    <div className={s.kitSelection}>
      <div className={s.kitPreview}>
        <h1>Choose Your Preferred room accessories</h1>
        <div className={s.imageWrapper}>
          <img src={room.fullPhoto} />
          <img src={kit.preview} />
          {components.map((item) => (
            <img key={item.id} src={item.preview} />
          ))}
        </div>
      </div>
      <div className={s.kits}>
        {items.map((item) => (
          <ListCard
            key={item.id}
            className={s.kit}
            onClick={() =>
              components?.find((i) => i.id === item.id)
                ? setComponents((prev) => prev.filter((i) => i.id !== item.id))
                : setComponents((prev) => [...prev, item])
            }
            active={components?.find((i) => i.id === item.id)}
          >
            <img src={item.photo} />
            <h2>{item.name}</h2>
            <p className={s.category}>{item.category}</p>
          </ListCard>
        ))}
      </div>
    </div>
  );
}

function FullDesign({ room, kit, components, setComponents }) {
  const [items, setItems] = useState([
    {
      id: "roomPanel",
      name: "RoomPanel-Teams",
      photo: "/assets/components/roomPanel.png",
      preview: "/assets/components/roomPanel_preview.png",
      category: "Teams Panel",
    },
  ]);
  const [tabs, setTabs] = useState([
    { id: "3dDiagram", label: "3D Diagram" },
    { id: "wiringDiagram", label: "Wiring Diagram" },
    { id: "seatingDiagram", label: "Seating Diagram" },
  ]);
  const [tab, setTab] = useState("3dDiagram");
  return (
    <div className={s.fullDesign}>
      <div className={s.kitPreview}>
        <h1>This is your Room Design</h1>
        <div className={s.tabs}>
          {tabs.map((item) => (
            <button
              className={`${s.tab} ${tab === item.id ? s.active : ""}`}
              key={item.id}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        {tab === "3dDiagram" && (
          <div className={s.imageWrapper}>
            <img src={room.fullPhoto} />
            <img src={kit.preview} />
            {components.map((item) => (
              <img key={item.id} src={item.preview} />
            ))}
          </div>
        )}
        {tab === "wiringDiagram" && (
          <div className={s.img}>
            <img src="/assets/rooms/large_room_wiring.jpg" />
          </div>
        )}
        {tab === "seatingDiagram" && (
          <div className={s.img}>
            <img src="/assets/rooms/large_room_seating.png" />
          </div>
        )}

        <table className={s.cart} cellSpacing="0">
          <thead>
            <tr>
              <th>Picture</th>
              <th>SKU</th>
              <th>Description</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {components.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.photo} />
                </td>
                <td>{item.sku}</td>
                <td>{item.description}</td>
                <td>x {item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className={s.kits}>
        {items.map((item) => (
          <ListCard
            key={item.id}
            className={s.kit}
            onClick={() =>
              components?.find((i) => i.id === item.id)
                ? setComponents((prev) => prev.filter((i) => i.id !== item.id))
                : setComponents((prev) => [...prev, item])
            }
            active={components?.find((i) => i.id === item.id)}
          >
            <img src={item.photo} />
            <h2>{item.name}</h2>
            <p className={s.category}>{item.category}</p>
          </ListCard>
        ))}
      </div> */}
    </div>
  );
}

function Card({ className, onClick, active, children }) {
  return (
    <div
      className={`${s.card} ${active ? s.active : ""} ${className || ""}`}
      onClick={onClick}
    >
      {children}
      <div className={s.tick}>{active && <BsCheckLg />}</div>
    </div>
  );
}
function ListCard({ className, onClick, active, children }) {
  return (
    <div
      className={`${s.listCard} ${active ? s.active : ""} ${className || ""}`}
      onClick={onClick}
    >
      {children}
      <div className={s.tick}>{active && <BsCheckLg />}</div>
    </div>
  );
}

export default function Home() {
  const [step, setStep] = useState(1);
  const [sp, setSp] = useState(null);
  const [room, setRoom] = useState(null);
  const [platform, setPlatform] = useState(null);
  const [kit, setKit] = useState(false);
  const [components, setComponents] = useState([]);
  return (
    <div className={s.content}>
      {step === 1 && <ServiceProvider sp={sp} setSp={setSp} />}
      {step === 2 && <RoomSelection room={room} setRoom={setRoom} />}
      {/* {step === 3 && (
        <PlatformSelection platform={platform} setPlatform={setPlatform} />
      )} */}
      {step === 3 && <KitSelection room={room} kit={kit} setKit={setKit} />}
      {step === 4 && (
        <ComponentsSelection
          room={room}
          kit={kit}
          components={components}
          setComponents={setComponents}
        />
      )}
      {step === 5 && (
        <AccessorySelection
          room={room}
          kit={kit}
          components={components}
          setComponents={setComponents}
        />
      )}
      {step === 6 && (
        <FullDesign
          room={room}
          kit={kit}
          components={components}
          setComponents={setComponents}
        />
      )}
      {step < 6 ? (
        <div className={s.actions}>
          <button
            className="btn"
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
          >
            Back
          </button>
          <button
            className="btn primary"
            disabled={
              (step === 1 && !sp) ||
              (step === 2 && !room) ||
              (step === 3 && !kit) ||
              (step === 4 && !components.length) ||
              step === 6
            }
            onClick={() => setStep(step + 1)}
          >
            Next
          </button>
        </div>
      ) : (
        <div className={s.actions}>
          <button
            className="btn"
            onClick={() => {
              setStep(1);
              setSp(null);
              setRoom(null);
              setPlatform(null);
              setKit(null);
              setComponents([]);
            }}
          >
            Start Over
          </button>
          <button className="btn">Ask Support</button>
          <button className="btn">Save Proposal</button>
        </div>
      )}
    </div>
  );
}
