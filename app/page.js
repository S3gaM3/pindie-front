'use client';

import { endpoints } from "./api/config";
import { Banner } from "./components/Banner/Banner";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";
import { Promo } from "./components/Promo/Promo";
import { useGetDataByCategory } from "./api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Home() {
  const { data: popularGames, loading: loadingPopular, error: errorPopular } = useGetDataByCategory(endpoints.games, "popular");
  const { data: newGames, loading: loadingNew, error: errorNew } = useGetDataByCategory(endpoints.games, "new");

  if (loadingPopular || loadingNew) {
    return <Preloader />;
  }

  if (errorPopular || errorNew) {
    return <div>Ошибка загрузки данных. Попробуйте обновить страницу.</div>;
  }

  return (
    <main className="main">
      <Banner />
      {
        popularGames && newGames ? (
          <>
            <CardsListSection id="popular" title="Популярные" data={popularGames} type="slider" />
            <CardsListSection id="new" title="Новинки" data={newGames} type="slider" />
          </>
        ) : <Preloader />
      }
      <Promo />
    </main>
  );
}
