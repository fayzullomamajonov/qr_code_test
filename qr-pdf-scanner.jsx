import React, { useState, useRef, useEffect } from 'react';
import { Camera, FileText, X, RefreshCw } from 'lucide-react';

export default function QRPDFScanner() {
  const [scanning, setScanning] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [error, setError] = useState('');
  const [cameraPermission, setCameraPermission] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const scanIntervalRef = useRef(null);

  // Start camera and QR scanning
  const startScanning = async () => {
    try {
      setError('');
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setCameraPermission(true);
        setScanning(true);
        
        // Start scanning for QR codes
        scanIntervalRef.current = setInterval(scanQRCode, 500);
      }
    } catch (err) {
      setCameraPermission(false);
      setError('Kameraga ruxsat berilmadi. Sozlamalarni tekshiring.');
    }
  };

  // Stop camera
  const stopScanning = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (scanIntervalRef.current) {
      clearInterval(scanIntervalRef.current);
    }
    setScanning(false);
  };

  // Scan QR code from video
  const scanQRCode = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      
      // Use jsQR library (loaded from CDN)
      if (window.jsQR) {
        const code = window.jsQR(imageData.data, imageData.width, imageData.height);
        
        if (code) {
          handleQRCodeDetected(code.data);
        }
      }
    }
  };

  // Handle detected QR code
  const handleQRCodeDetected = (data) => {
    stopScanning();
    
    // Check if it's a URL
    try {
      const url = new URL(data);
      
      // Check if it's a PDF URL
      if (data.toLowerCase().endsWith('.pdf') || data.includes('pdf')) {
        setPdfUrl(data);
      } else {
        // If not a PDF, still show it but with a warning
        setPdfUrl(data);
      }
    } catch (e) {
      // If not a URL, treat it as a potential file path or show error
      setError('QR kod PDF havolasini o\'z ichiga olmaydi: ' + data);
    }
  };

  // Close PDF viewer
  const closePDF = () => {
    setPdfUrl('');
    setError('');
  };

  // Load jsQR library
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js';
    document.head.appendChild(script);

    return () => {
      stopScanning();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <div className="flex items-center gap-3">
              <FileText size={32} />
              <div>
                <h1 className="text-2xl font-bold">QR PDF Skaner</h1>
                <p className="text-blue-100 text-sm">QR kodni skanerlang va PDF ni oching</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            {!pdfUrl && !scanning && (
              <div className="text-center space-y-6">
                <div className="bg-blue-50 rounded-xl p-8">
                  <Camera size={64} className="mx-auto text-blue-600 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    PDF QR kodni skanerlash
                  </h2>
                  <p className="text-gray-600 mb-6">
                    QR kod ichida PDF havolasi bo'lishi kerak
                  </p>
                  <button
                    onClick={startScanning}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 mx-auto"
                  >
                    <Camera size={20} />
                    Skanerlashni boshlash
                  </button>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    {error}
                  </div>
                )}

                {cameraPermission === false && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800">
                    <p className="font-medium mb-2">Kameraga ruxsat kerak</p>
                    <p className="text-sm">
                      Brauzer sozlamalarida kameraga ruxsat bering va sahifani yangilang
                    </p>
                  </div>
                )}

                {/* Instructions */}
                <div className="bg-gray-50 rounded-lg p-6 text-left space-y-3">
                  <h3 className="font-semibold text-gray-800 mb-3">Qanday ishlaydi:</h3>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <p>1️⃣ "Skanerlashni boshlash" tugmasini bosing</p>
                    <p>2️⃣ QR kodni kamera oldiga tutib turing</p>
                    <p>3️⃣ PDF avtomatik ochiladi</p>
                  </div>
                </div>
              </div>
            )}

            {/* Camera View */}
            {scanning && (
              <div className="space-y-4">
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full"
                  />
                  <div className="absolute inset-0 border-4 border-blue-500 rounded-lg pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white rounded-lg"></div>
                  </div>
                </div>
                <canvas ref={canvasRef} className="hidden" />
                <button
                  onClick={stopScanning}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <X size={20} />
                  To'xtatish
                </button>
              </div>
            )}

            {/* PDF Viewer */}
            {pdfUrl && (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                  <p className="font-medium">PDF topildi!</p>
                  <p className="text-sm break-all">{pdfUrl}</p>
                </div>

                <div className="bg-gray-100 rounded-lg overflow-hidden" style={{ height: '600px' }}>
                  <iframe
                    src={pdfUrl}
                    className="w-full h-full border-0"
                    title="PDF Viewer"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={closePDF}
                    className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <X size={20} />
                    Yopish
                  </button>
                  <button
                    onClick={() => {
                      closePDF();
                      startScanning();
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <RefreshCw size={20} />
                    Yana skanerlash
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-600 text-sm">
          <p>QR kod PDF havolasini o'z ichiga olishi kerak</p>
          <p className="mt-1">Masalan: https://example.com/document.pdf</p>
        </div>
      </div>
    </div>
  );
}
