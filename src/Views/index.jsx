import React from "react";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import s from "./style.module.scss";

function ServiceProvider({ sp, setSp }) {
  const [providers, setProviders] = useState([
    {
      id: "ms_team",
      name: "Microsoft Teams",
      photo: "/assets/service_providers/teams.png",
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
      id: "phone_room",
      name: "Phone Room",
      photo: "/assets/rooms/phone_room.png",
      capacity: "1-2 People",
      size: "5ft x 5ft",
    },
    {
      id: "small_room",
      name: "Small Room",
      photo: "/assets/rooms/small_room.png",
      fullPhoto: "/assets/rooms/small_room_full.png",
      capacity: "3-7 People",
      size: "10ft x 15ft",
    },
    {
      id: "medium_room",
      name: "Medium Room",
      photo: "/assets/rooms/medium_room.png",
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
      id: "A20-020",
      name: "A20-020",
      photo: "/assets/kits/A20-020.png",
      preview: "/assets/kits/A20-020_preview.png",
    },
    {
      id: "meetingBoard_65",
      name: "MeetingBoard 65",
      photo: "/assets/kits/meetingBoard_65.png",
      preview: "/assets/kits/meetingBoard_65_preview.png",
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
      id: "CTP18",
      name: "CTP18",
      photo: "/assets/components/CTP18.png",
      preview: "/assets/components/CTP18_preview.png",
      category: "Touch Console",
    },
    {
      id: "WPP20",
      name: "WPP20",
      photo: "/assets/components/WPP20.png",
      preview: "/assets/components/WPP20_preview.png",
      category: "Wireless Presentation Dongle",
    },
    {
      id: "VCH51",
      name: "VCH51",
      photo: "/assets/components/VCH51.png",
      preview: "/assets/components/VCH51_preview.png",
      category: "Content Share & BYOD Box",
    },
  ]);
  return (
    <div className={s.kitSelection}>
      <div className={s.kitPreview}>
        <h1>Select your Core Kit to start</h1>
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
      id: "roomPanel",
      name: "RoomPanel-Teams",
      photo: "/assets/components/roomPanel.png",
      preview: "/assets/components/roomPanel_preview.png",
      category: "Teams Panel",
    },
  ]);
  return (
    <div className={s.kitSelection}>
      <div className={s.kitPreview}>
        <h1>Select your Core Kit to start</h1>
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
  return (
    <div className={s.fullDesign}>
      <div className={s.kitPreview}>
        <h1>Select your Core Kit to start</h1>
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
      {step === 3 && (
        <PlatformSelection platform={platform} setPlatform={setPlatform} />
      )}
      {step === 4 && <KitSelection room={room} kit={kit} setKit={setKit} />}
      {step === 5 && (
        <ComponentsSelection
          room={room}
          kit={kit}
          components={components}
          setComponents={setComponents}
        />
      )}
      {step === 6 && (
        <AccessorySelection
          room={room}
          kit={kit}
          components={components}
          setComponents={setComponents}
        />
      )}
      {step === 7 && (
        <FullDesign
          room={room}
          kit={kit}
          components={components}
          setComponents={setComponents}
        />
      )}
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
            (step === 3 && !platform) ||
            (step === 4 && !kit) ||
            step === 6
          }
          onClick={() => setStep(step + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
