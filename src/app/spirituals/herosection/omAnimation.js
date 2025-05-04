"use client";

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Since Samyak Devanagari isn't available via next/font, we'll use a Google Fonts fallback or direct import
// We'll import it via CSS and apply it manually
import Head from "next/head";

export default function OmSymbolBootstrap() {
  const [clockwiseRotation, setClockwiseRotation] = useState(0);
  const [antiClockwiseRotation, setAntiClockwiseRotation] = useState(0);

  const styles = {
    container: {
      borderRadius: "8px",
      padding: "2rem",
      maxWidth: "600px",
      margin: "0 auto",
    },
    symbolContainer: {
      position: "relative",
      width: "400px",
      height: "400px",
      margin: "0 auto",
    },
    circleBase: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    omSymbol: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#FF0000",
      fontSize: "100px",
      fontWeight: "bold",
      textAlign: "center",
      lineHeight: "1",
      fontFamily: "'Samyak Devanagari', 'Noto Serif Devanagari', serif",
    },
  };

  // Automatic rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setClockwiseRotation((prev) => (prev + 0.2) % 360);
      setAntiClockwiseRotation((prev) => (prev - 0.1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          @font-face {
            font-family: 'Samyak Devanagari';
            src: url('https://fontlibrary.org/assets/fonts/samyak-devanagari/1f7b7f9b8f7e7d5b5b7e7f9b8f7e7d5b/Samyak-Devanagari.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
          .sanskrit-text {
            font-family: 'Samyak Devanagari', 'Noto Serif Devanagari', serif !important;
          }
        `}</style>
      </Head>
      <div className="container py-4" style={styles.container}>
        <div className="row justify-content-center">
          <div className="col-12">
            <div style={styles.symbolContainer}>
              {/* Background Circle */}
              <div style={styles.circleBase}></div>

              {/* Outer Orange Sanskrit Text - Clockwise */}
              <svg
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  transform: `rotate(${clockwiseRotation}deg)`,
                }}
                viewBox="0 0 400 400"
              >
                <path
                  id="outerCircleText"
                  fill="none"
                  d="M 200,50 A 150,150 0 1,1 199,50"
                />
                <text
                  fill="#FF6600"
                  fontSize="30"
                >
                  <textPath                   className="sanskrit-text"
 href="#outerCircleText" startOffset="0%">
                    ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।
                    सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥
                    ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।
                    सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥
                  </textPath>
                </text>
              </svg>

              {/* Middle Green Sanskrit Text - Anti-clockwise */}
              <svg
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  transform: `rotate(${antiClockwiseRotation}deg)`,
                }}
                viewBox="0 0 400 400"
              >
                <path
                  id="middleCircleText"
                  fill="none"
                  d="M 200,100 A 100,100 0 1,1 199,100"
                />
                <text
                  fill="#4CAF50"
                  fontSize="14"
                  className="sanskrit-text"
                >
                  <textPath                   className="sanskrit-text"
 href="#middleCircleText" startOffset="0%">
                    ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥
                    ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥
                  </textPath>
                </text>
              </svg>

              {/* Central Om Symbol */}
              <div style={styles.omSymbol}>ॐ</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}