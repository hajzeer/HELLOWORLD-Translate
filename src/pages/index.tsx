import Layout from "../Layout/Layout";
import {
    BgImageDiv,
    Container,
    DescParagraph,
    DIV,
    FifthIcon,
    FirstIcon,
    FourthIcon,
    H1,
    H2,
    HelperDiv,
    Hero,
    InfoDiv,
    MainQuote,
    QuoteStyled,
    SecondIcon,
    ThirdIcon
} from "../pageStyle/home/style";
import Image from 'next/image'
import {NextPage} from "next";
import sanityClient from "../utils/client";
import {useRouter} from "next/router";
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react"
// @ts-ignore
const Home: NextPage = ({data}) => {
    const router = useRouter()

    return (
        <Layout>
            <Container>
                <Hero>
                    <InfoDiv>
                        <FirstIcon>
                            <Image src='/1.svg' width={500} height={500}/>
                        </FirstIcon>
                        <H1>
                            {data[0].Title}
                        </H1>
                        <SecondIcon>
                            <Image src='/2.svg' width={500} height={500}/>
                        </SecondIcon>
                    </InfoDiv>
                </Hero>
                <DIV>
                    <H2>
                        Our services
                    </H2>
                    <InfoDiv>
                        <ThirdIcon>
                            <Image src='/8.svg' width={500} height={500}/>
                        </ThirdIcon>
                        <QuoteStyled>
                            {data[0].quotes[0].Title}
                        </QuoteStyled>
                        <FourthIcon>
                            <Image src='/10.svg' width={500} height={500}/>
                        </FourthIcon>
                        <BgImageDiv>
                            <HelperDiv>
                                <Image
                                    src="/7.svg"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                />
                            </HelperDiv>
                            <DescParagraph>
                                <BlockContent
                                    blocks={data[0].description[router.locale]}
                                />
                            </DescParagraph>
                        </BgImageDiv>
                    </InfoDiv>
                </DIV>
                <MainQuote>
                    {data[0].quotes[1].Title}
                </MainQuote>
                <DIV>
                    <H2>
                        ABOUT US
                    </H2>
                    <FifthIcon>
                        <Image src='/11.svg' width={500} height={500}/>
                    </FifthIcon>
                </DIV>
            </Container>
        </Layout>
    )
}

// @ts-ignore
export async function getStaticProps({locale}) {
    const data = await sanityClient.fetch(
        `
        *[_type == "frontPage"] {
  "Title":Title.${locale},
  quotes[]{
  "Title":Title.${locale}
  },
  description{
  ${locale}
  },
  mainImage[]{
    asset->{
    url
  }
  }
}
        `
    );
    return {
        props: {
            data,
        },
        revalidate: 1,
    };
}

export default Home
