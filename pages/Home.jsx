import React from 'react';
import Layout from '../components/Layout'; // Layout'un yolu sana göre değişebilir
import HeroSection from "../components/HeroSection";
import TwoSection from "../components/TwoSection";
import ThreeSection from "../components/ThreeSection";
import ExpandableColumnComp from "../components/ExpandableColumnComp";
import ImageGridComp from "../components/ImageGridComp";
import ImageGrid2Comp from "../components/ImageGrid2Comp";
import HeroWithTiltedImagesComp from "../components/HeroWithTiltedImagesComp";

function Home() {
  return (
    <Layout>
      <HeroSection />
<TwoSection/>
<ThreeSection/>
<ExpandableColumnComp/>
<ImageGridComp/>
<ImageGrid2Comp/>
<HeroWithTiltedImagesComp/>
      {/* <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-blue-500 text-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Kolon 1</h2>
            <p>Burada içerik olabilir.</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Kolon 2</h2>
            <p>Burada içerik olabilir.</p>
          </div>
          <div className="bg-red-500 text-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Kolon 3</h2>
            <p>Burada içerik olabilir.</p>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default Home;
