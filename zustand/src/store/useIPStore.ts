import { create } from "zustand";
import { persist } from "zustand/middleware";

type IPStore = {

    ip: string;
    fetchMyIp: () => Promise<void>;
}

export const useIPStore = create<IPStore>()(
    persist(
        set => ({

            ip: '',
            fetchMyIp: async () => {
        
                const response = await fetch('https://api.ipify.org?format=json');
                const data: { ip: string } = await response.json();
        
                set({
                    ip: data.ip
                })
            }
        }),
        {
                name: 'ip-storage'
            }
        )
        )