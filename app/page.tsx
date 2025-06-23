"use client";
import { useState } from "react";

const questions = [
  "Sua empresa possui uma Política de Segurança e Saúde atualizada?",
  "O Programa de Gerenciamento de Riscos (PGR) está ativo?",
  "Há canal de escuta psicológica conforme a Lei 14.831?",
  "Os treinamentos exigidos estão atualizados e documentados?",
  "Existe integração entre RH e jurídico no plano de SST?"
];

export default function VitriaIA() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (response) => {
    setAnswers([...answers, response]);
    setStep(step + 1);
  };

  const calculateResult = () => {
    const score = answers.filter((a) => a === true).length;
    if (score <= 2) return "Alerta crítico: ação imediata necessária.";
    if (score <= 4) return "Risco moderado: há espaço claro para evolução.";
    return "Excelente! Sua empresa está pronta para inspeções.";
  };

  return (
    <div className="min-h-screen bg-teal-950 text-white flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-gray-900 p-6 rounded-xl shadow-xl space-y-6">
        <div className="text-center">
          <img
            src="/mcgen-avatar.png"
            alt="MCGEN logo"
            className="mx-auto w-24 h-24 mb-4 rounded-full"
          />
          <h1 className="text-2xl font-bold">MCGEN | VÍTRIA</h1>
          <p className="text-sm">by Maria Cristina Garcia</p>
        </div>
        {step < questions.length ? (
          <div className="space-y-4">
            <p className="text-lg font-medium">{questions[step]}</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleAnswer(true)}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white"
              >
                Sim
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="bg-red-600 hover:
