import { Bot, ChevronUp } from "lucide-react";

const menu = {
  title: "Models",
  url: "#",
  icon: Bot,
  items: [
    {
      title: "Genesis",
      url: "#",
    },
    {
      title: "Explorer",
      url: "#",
    },
    {
      title: "Quantum",
      url: "#",
    },
  ],
};

export default function CollapsibleMenu() {
  return (
    <div className="jun-sidebarGroup">
      <ul className="jun-sidebarMenu">
        <li className="jun-sidebarMenuItem">
          <label
            className="jun-sidebarMenuButton peer has-[:focus-visible]:outline has-[:focus-visible]:outline-blue-600"
            htmlFor="collapsible-menu-1"
          >
            <Bot className="jun-sidebarIcon" />
            <div className="jun-sidebarText flex items-center">
              <span className="min-w-0 flex-1">{menu.title}</span>
            </div>
            <ChevronUp className="size-4 has-[+_:checked]:rotate-180 absolute right-2" />
            <input
              type="checkbox"
              className="sr-only"
              id="collapsible-menu-1"
              defaultChecked={false}
            />
          </label>

          <div className="jun-sidebarGroupText peer-has-[:checked]:grid-rows-[0fr] peer-has-[:checked]:invisible peer-has-[:checked]:opacity-0">
            <div>
              <ul className="jun-sidebarMenu jun-sidebarMenu-nested">
                {menu.items.map((item) => (
                  <li key={item.title} className="jun-sidebarMenuItem">
                    <button className="jun-sidebarMenuButton">
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
