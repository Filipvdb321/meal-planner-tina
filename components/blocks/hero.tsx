"use client";
import * as React from "react";
import type { Template } from "tinacms";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { Actions } from "./actions";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import styles from './Hero.module.css';

export const Hero = ({ data }: { data: PageBlocksHero }) => (
  <Box className={styles.hero} style={{ backgroundImage: `url(${data.image?.src})` }}>
    <Box position="relative" className={styles.heroBox}>
      {/* Hero Heading */}
      <Heading
        as="h1"
        size={{ initial: '6', sm: '9' }}
        mb="4"
        color="green"
        className={styles.textShadow}
        data-tina-field={tinaField(data, 'tagline')}
      >
        {data.tagline}
      </Heading>
      <Box>
        <Heading
          as="h2"
          size={{ initial: '4', sm: '7' }}
          mb="4"
          color="green"
          className={styles.textShadow}
          data-tina-field={tinaField(data, 'headline')}
        >
          {data.headline}
        </Heading>
      </Box>
    </Box>

    {/* Call to Action Button */}
    {data.actions && (
      <Flex mt="6" align="center" justify="center" >
        <Box className={styles.heroBox}>
          <Actions actions={data.actions} />
        </Box>
      </Flex>
    )}
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      className={styles.overlay}
    />
  </Box>
);


export const heroBlockSchema: Template = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "This Big Text is Totally Awesome",
      text: "Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Text-1",
      name: "text",
      type: "rich-text",
    },
    {
      type: "rich-text",
      label: "Text-2",
      name: "text2",
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        }
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
