/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";


import React from "react";
import PageTitle from "@/components/PageTitle";


type Props = {};


export default function SettingsPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Settings" />
      <h1>This is the Settings</h1>
    </div>
  );
}

