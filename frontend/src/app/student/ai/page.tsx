"use client";

import { useState } from "react";

import {
  analyzeSkillGap,
} from "@/services/aiService";

export default function AIPage() {
  const [
    currentSkills,
    setCurrentSkills,
  ] = useState("");

  const [
    desiredRole,
    setDesiredRole,
  ] = useState("");

  const [
    result,
    setResult,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleAnalyze =
    async () => {
      try {
        setLoading(true);

        const data =
          await analyzeSkillGap(
            currentSkills,
            desiredRole
          );

        setResult(
          data.result
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="min-h-screen bg-gray-50 p-10">

      <h1 className="text-4xl font-bold mb-8">
        AI Skill Gap Analyzer
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow max-w-3xl">

        <label className="block font-medium mb-2">
          Current Skills
        </label>

        <textarea
          value={currentSkills}
          onChange={(e) =>
            setCurrentSkills(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-lg"
          rows={4}
          placeholder="Java, React, HTML, CSS"
        />

        <label className="block font-medium mt-6 mb-2">
          Desired Role
        </label>

        <input
          value={desiredRole}
          onChange={(e) =>
            setDesiredRole(
              e.target.value
            )
          }
          className="w-full border p-3 rounded-lg"
          placeholder="Frontend Developer"
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl"
        >
          {loading
            ? "Analyzing..."
            : "Analyze Skills"}
        </button>

        {result && (
          <div className="mt-8 bg-gray-100 p-6 rounded-xl whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}