import { useState, useEffect } from 'react'

export default () => {
  const [enl, setEnl] = useState(null);
  const [hataMsj, setHataMsj] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (yer) => setEnl(yer.coords.latitude),
      (hata) => setHataMsj(hata.message)
    );
  }, [])


  return [enl, hataMsj];
};

