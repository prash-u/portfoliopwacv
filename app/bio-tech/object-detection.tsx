"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../../components/Footer";
import { getBackgroundStyle } from "../../utils/BackgroundStyles";

export default function ObjectDetection() {
  const [currentModel, setCurrentModel] = useState<any>(null);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);

  useEffect(() => {
    const modelSelector = document.getElementById("modelSelector") as HTMLSelectElement;
    runDetection(modelSelector.value);

    return () => {
      stopDetection();
    };
  }, []);

  const setupCamera = async () => {
    const video = document.getElementById("video") as HTMLVideoElement;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      setVideoStream(stream);

      return new Promise<HTMLVideoElement>((resolve) => {
        video.onloadedmetadata = () => {
          video.play();
          resolve(video);
        };
      });
    } catch (error) {
      console.error("Error accessing the webcam:", error);
      alert("Failed to access the webcam. Please ensure you have granted permission.");
      throw error;
    }
  };

  const stopDetection = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      setAnimationFrameId(null);
    }
    if (videoStream) {
      videoStream.getTracks().forEach((track) => track.stop());
      setVideoStream(null);
    }
    const context = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d");
    context?.clearRect(0, 0, context.canvas.width, context.canvas.height);
    const video = document.getElementById("video") as HTMLVideoElement;
    video.pause();
    setCurrentModel(null);
  };

  const loadModel = async (modelName: string) => {
    document.getElementById("loadingIndicator")!.style.display = "block";
    try {
      switch (modelName) {
        case "mobilenet":
          return await import("@tensorflow-models/mobilenet").then((mod) => mod.load());
        case "coco-ssd":
          return await import("@tensorflow-models/coco-ssd").then((mod) => mod.load());
        case "handpose":
          return await import("@tensorflow-models/handpose").then((mod) => mod.load());
        case "faceapi":
          const faceapi = await import("face-api.js");
          await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
          await faceapi.nets.faceExpressionNet.loadFromUri("/models");
          return faceapi;
        case "bodypix":
          return await import("@tensorflow-models/body-pix").then((mod) => mod.load());
        default:
          throw new Error("Unsupported model: " + modelName);
      }
    } catch (error) {
      console.error("Error loading the model:", error);
      alert(`Failed to load model: ${error.message}`);
      return null;
    } finally {
      document.getElementById("loadingIndicator")!.style.display = "none";
    }
  };

  const detect = async (modelName: string) => {
    const video = document.getElementById("video") as HTMLVideoElement;
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d");

    setAnimationFrameId(requestAnimationFrame(() => detect(modelName)));

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);

      switch (modelName) {
        case "handpose":
          currentModel?.estimateHands(video).then((predictions: any) => {
            drawHandPredictions(predictions, context);
          }).catch((error: any) => console.error("Detection failed:", error));
          break;
        case "faceapi":
          currentModel?.detectAllFaces(video).withFaceExpressions().then((predictions: any) => {
            drawFacePredictions(predictions, context);
          }).catch((error: any) => console.error("Detection failed:", error));
          break;
        case "bodypix":
          currentModel?.segmentPerson(video).then((segmentations: any) => {
            drawBodyPix(segmentations, context);
          }).catch((error: any) => console.error("Detection failed:", error));
          break;
        default:
          currentModel?.detect(video).then((predictions: any) => {
            drawPredictions(predictions, context);
          }).catch((error: any) => console.error("Detection failed:", error));
          break;
      }
    }
  };

  const drawPredictions = (predictions: any[], context: CanvasRenderingContext2D | null) => {
    const video = document.getElementById("video") as HTMLVideoElement;
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const scaleX = canvas.width / video.videoWidth;
    const scaleY = canvas.height / video.videoHeight;

    context?.clearRect(0, 0, canvas.width, canvas.height);

    predictions.forEach((prediction) => {
      if (prediction.bbox) {
        const [x, y, width, height] = prediction.bbox;
        const scaledX = x * scaleX;
        const scaledY = y * scaleY;
        const scaledWidth = width * scaleX;
        const scaledHeight = height * scaleY;

        context!.strokeStyle = "orange";
        context!.lineWidth = 4;
        context!.strokeRect(scaledX, scaledY, scaledWidth, scaledHeight);

        const text = `${prediction.class} ${Math.round(prediction.score * 100)}%`;
        context!.fillStyle = "rgba(255, 165, 0, 0.85)";
        context!.font = "18px Arial";
        const textWidth = context!.measureText(text).width;
        context!.fillRect(scaledX, scaledY - 20, textWidth, 24);
        context!.fillStyle = "white";
        context!.fillText(text, scaledX, scaledY - 5);
      }
    });
  };

  const drawHandPredictions = (predictions: any[], context: CanvasRenderingContext2D | null) => {
    // Implement hand prediction drawing code
  };

  const drawFacePredictions = (predictions: any[], context: CanvasRenderingContext2D | null) => {
    // Implement face prediction drawing code
  };

  const drawBodyPix = (segmentations: any[], context: CanvasRenderingContext2D | null) => {
    // Implement body segmentation drawing code
  };

  const runDetection = async (modelName: string) => {
    stopDetection();
    const video = await setupCamera();
    const model = await loadModel(modelName);
    if (!model) return;
    setCurrentModel(model);
    video.play();
    detect(modelName);
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-6 sm:p-12 lg:p-24" style={getBackgroundStyle('lightblue')}>
      <header className="w-full mb-8">
        <nav className="w-full max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-md">
          <ul className="flex justify-center space-x-6 text-gray-800 text-lg font-semibold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/bio-tech">Bio-Tech Projects</Link></li>
            <li><Link href="/personal-projects">Personal Projects</Link></li>
           <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="controls mb-8">
        <select id="modelSelector" className="p-2 border rounded">
          <option value="mobilenet">MobileNet (Lightweight Model)</option>
          <option value="coco-ssd" selected>COCO-SSD</option>
          <option value="handpose">Hand Pose</option>
          <option value="faceapi">Facial Expression</option>
          <option value="bodypix">Body Segmentation</option>
        </select>
        <button id="startButton" className="ml-4 p-2 bg-blue-500 text-white rounded" onClick={() => runDetection((document.getElementById('modelSelector') as HTMLSelectElement).value)}>Start Detection</button>
        <button id="stopButton" className="ml-4 p-2 bg-red-500 text-white rounded" onClick={stopDetection}>Stop Detection</button>
      </div>

      <div className="video-container mb-8">
        <video id="video" width="640" height="480" autoPlay muted playsInline className="border rounded"></video>
        <canvas id="canvas" width="640" height="480" className="absolute top-0 left-0"></canvas>
      </div>

      <div id="loadingIndicator" className="text-center text-lg text-gray-700 mb-4">Loading model, please wait...</div>

      <Footer />
    </main>
  );
}
