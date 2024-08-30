'use client'

import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {

  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
  }, [])

  return (
    <main className="p-4 bg-pink-600">
      {
        userData ?
        (
          <div>
            <h1 className="text-2xl font-bold mb-4">User Data</h1>
            <ul>
              <li>ID: {userData.id}</li>
              <li>FIrst Name: {userData.first_name}</li>
              <li>Last Name: {userData.last_name}</li>
              <li>ID: {userData.language_code}</li>
              <li>Premium User: {userData.is_premium ? `Yes` : `No`}</li>
            </ul>
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )
      }
    </main>
  );
}
