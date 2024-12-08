"use client"
import { menuGroups } from "@/app/dashboard/_data/menu";
import { triggerEdgeCollapse, triggerEdgeDrawer } from "tailwindcss-jun-layout";
import React, { KeyboardEvent } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

export default function WorkshopDashboard() {
  const [sidebar, setSidebar] = React.useState(null);
  React.useEffect(() => {
    setSidebar(document.querySelector(".jun-edgeSidebar"));
  }, []);
  return (
  <TooltipProvider delayDuration="0">
  <div className="jun-layout">
    <header className="jun-header">
      <button className="jun-edgeDrawerTrigger"></button>
      <button className="jun-collapsibleTrigger"
      onClick={(event)=>triggerEdgeCollapse({event})}>
        collapse
      </button>
      Header
    </header>
    <aside 
      // className="jun-edgeSidebar 
      // jun-edgeSidebar-w-[200px] 
      // jun-edgeSidebar-drawer 
      // sm:jun-edgeSidebar-permanent
      // sm:jun-edgeSidebar-collapsed-w-[48px]
      // sm:jun-edgeSidebar-permanent-hoverUncollapse
      // jun-edgeSidebar-permanent-autoCollapse-lg"
      className="
      jun-edgeSidebar 
      jun-edgeSidebar-w-[200px]
      jun-edgeSidebar-permanent
      jun-edgeSidebar-collapsed-w-[48px]
      jun-edgeSidebar-permanent-hoverUncollapse
      jun-edgeSidebar-permanent-autoCollapse-lg
      "
      //jun-edgeSidebar-permanent คือ กางออก
      //jun-edgeSidebar-drawer คือ หุบเข้า
      >
      <div className="jun-edgeContent">
        <div className="jun-sidebarContainer">
          {menuGroups.map((group)=>(
            <div key={group.label} className="jun-sidebarGroup">
              <div className="jun-sidebarGroupLabel">{group.label}</div>
              <ul className="jun-sidebarMenu">
                {group.items.map((menu) => {
                  const Icon = menu.icon;
                  return (
                  <li key={menu.label} className="jun-sidebarMenuItem">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <label className="jun-sidebarMenuButton jun-collapsibleTrigger">
                          <Icon className="jun-sidebarIcon jun-sidebarIcon-shrink-size-5"></Icon>
                          <span className="jun-sidebarText block">{menu.label}</span>
                          <input type="checkbox" className="sr-only"/>
                        </label>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="jun-sidebarTooltip" container={sidebar}>{menu.label}</TooltipContent>
                    </Tooltip>
                    {!!menu.menus && (
                      <div className="jun-collapsibleContent">
                        <div>
                          <ul className="jun-sidebarmenu jun-sidebarMenu-nested">
                            {menu.menus.map(submenu => (
                              <li key={submenu.title} className="jun-sidebarMenuItem">
                                <button className="jun-sidebarMenuButton">
                                  <span className="jun-sidebarText">
                                  {submenu.title}
                                  </span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>)
                })}
              </ul>
            </div>
          ))}
          
        </div>
      </div>
    </aside>
    <main className="jun-content">CONTENT</main>
    <footer className="jun-footer">FOOTER</footer>
  </div>
  </TooltipProvider>);
  
}
