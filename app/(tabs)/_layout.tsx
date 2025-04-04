import { Tabs } from "expo-router";
import { Redirect } from 'expo-router';
import { useAuth } from "../../hooks/auth";

export default function RootLayout() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Accueil",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "Mes voyages",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
