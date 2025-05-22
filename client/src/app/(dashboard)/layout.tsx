"use client"

import AppSidebar from "@/components/AppSidebar";
import Loading from "@/components/Loading";
import NavBar from "@/components/Navbar"
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ChaptersSidebar from "./user/courses/[courseId]/ChaptersSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [ courseId, setCourseId ] = useState<string | null>(null);
    const { user, isLoaded } = useUser();
    const isCoursePage = /^\/user\/courses\/[^\/]+(?:\/chapters\/[^\/]+)?$/.test(
        pathname
    );

    // handle use effect isCoursePage


    useEffect(() => {
        if (isCoursePage) {
            const match = pathname.match(/\/user\/courses\/([^\/]+)/);
            setCourseId(match ? match[1] : null);
        } else {
            setCourseId(null);
        }
    }, [isCoursePage, pathname]);

    if (!isLoaded) return <Loading />
    if (!user) return <div>Please sign in to acces this page</div>

    return (
        <SidebarProvider>
            <div className="dashboard">
                <AppSidebar />
                {/*sidebar will go here*/}
                <div className="dashboard__content">
                    {courseId && <ChaptersSidebar />}
                    {/*chapter sidebar will go here*/}
                    <div className={cn(
                        "dashboard__main",
                        isCoursePage && "dashboard__main--not-course"
                    )}
                        style={{ height: "100vh" }}
                    >
                        <NavBar isCoursePage={isCoursePage} />
                        <main className="dashboard__body">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}
