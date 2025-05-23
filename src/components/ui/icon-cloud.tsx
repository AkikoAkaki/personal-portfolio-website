"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, currentAppliedTheme: string) => {
  console.log("renderCustomIcon CALLED with actual theme:", currentAppliedTheme, "and icon:", icon.title);

  const bgHex = currentAppliedTheme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = currentAppliedTheme === "light" ? "#969696" : "#ffffff";
  const minContrastRatio = currentAppliedTheme === "light" ? 100 : 2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) {
      console.log("IconCloud: Data is not ready yet for icons."); // <--- 添加这行
      return null;
    }

    const currentActualTheme = resolvedTheme || theme || "light";
    console.log("IconCloud: RECOMPUTING renderedIcons for theme:", theme);

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, currentActualTheme),
    );
  }, [data, theme]);

  console.log("IconCloud: Current theme is:", theme, "resolvedTheme=", resolvedTheme, "Rendered icons count:", renderedIcons ? renderedIcons.length : 0);

  if (!renderedIcons) {
    console.log("IconCloud: renderedIcons is null, rendering nothing for Cloud children.");
    return null; 
  }

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
