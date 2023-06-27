import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  LegacyCard,
  Form,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";
import { useAuthenticatedFetch } from "../hooks";
import { useState } from "react";

export default function HomePage() {
  const { t } = useTranslation();
  const fetch = useAuthenticatedFetch();
  const [number, setNumber] = useState('');
  const [code, setCode] = useState('')



  const sendOtp = async (e) => {
    e.preventDefault();
    if (number === "") {
      return alert("Number is empty");
    }
    console.log('nm', number)
    const res = await fetch("/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({number}),
    });

    const json = await res.json();
    if (res.ok) {
      console.log("res ok");
      console.log(json);
    } else {
      console.log("error");
      console.log(json);
    }
  };
  const verifyOtp = async (e) => {
    e.preventDefault();
    if (code === "") {
      return alert("Number is empty");
    }
    console.log('code', code)
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({code}),
    });

    const json = await res.json();
    if (res.ok) {
      console.log("res ok");
      console.log(json);
    } else {
      console.log("error");
      console.log(json);
    }
  };
  return (
    <Page narrowWidth>
      <div>
        TWILLIO

        {/* todo add phone select with country codes and flags underhood */}
        <Form method="post" onSubmit={sendOtp}>
          <label>
            Number
            <input
              type="text"
              name="number"
              value={number}
              onChange={(e) =>  setNumber(e.target.value) }
            />
          </label>

            <button type="submit">
              Send OTP
            </button>
        </Form>

        <Form method="post" onSubmit={verifyOtp}>
          <label>
            Code
            <input
              type="text"
              name="number"
              value={code}
              onChange={(e) =>  setCode(e.target.value) }
            />
          </label>

            <button type="submit">
              Verify OTP
            </button>
        </Form>
      </div>

      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            {/* <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Text as="h2" variant="headingMd">
                    {t("HomePage.heading")}
                  </Text>
                  <p>
                    <Trans
                      i18nKey="HomePage.yourAppIsReadyToExplore"
                      components={{
                        PolarisLink: (
                          <Link url="https://polaris.shopify.com/" external />
                        ),
                        AdminApiLink: (
                          <Link
                            url="https://shopify.dev/api/admin-graphql"
                            external
                          />
                        ),
                        AppBridgeLink: (
                          <Link
                            url="https://shopify.dev/apps/tools/app-bridge"
                            external
                          />
                        ),
                      }}
                    />
                  </p>
                  <p>{t("HomePage.startPopulatingYourApp")}</p>
                  <p>
                    <Trans
                      i18nKey="HomePage.learnMore"
                      components={{
                        ShopifyTutorialLink: (
                          <Link
                            url="https://shopify.dev/apps/getting-started/add-functionality"
                            external
                          />
                        ),
                      }}
                    />
                  </p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt={t("HomePage.trophyAltText")}
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack> */}
          </LegacyCard>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
