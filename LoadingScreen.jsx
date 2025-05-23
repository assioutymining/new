import React, { useEffect, useState } from 'react';

function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50">
      <img src="/logo.png" alt="Logo" className="w-24 h-24 mb-4 animate-pulse" />
      <h1 className="text-xl">مطعم الذوق الرفيع</h1>
      <p>العنوان: شارع النيل - الجيزة</p>
      <p>رقم الهاتف: 0123456789</p>
      <p className="mt-4 text-yellow-300">🔥 عرض خاص اليوم: بيتزا + مشروب مجاناً 🔥</p>
    </div>
  );
}

export default LoadingScreen;
