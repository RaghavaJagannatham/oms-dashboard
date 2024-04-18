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



export default function OrdersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Orders" />
      <h1>This is the Order page</h1>
    </div>
  );
}
