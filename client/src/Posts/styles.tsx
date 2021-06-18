import styled from "styled-components";

type CardPropType = {
  truncated?: boolean;
  sentiment: string;
};

export const Card = styled.div`
  background-color: white;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 2px 3px,
    rgba(10, 10, 10, 0.1) 0px 0px 0px 1px;
  max-width: 100%;
  margin-bottom: 1rem;
  padding: 0rem 2rem 1rem 1rem;
  .header {
    display: flex;
    flex: wrap;
    align-items: flex-start;
    padding-left: 1rem;
    .avatar {
      position: relative;
      width: 30px;
      margin-right: 1rem;
      img {
        position: absolute;
        vertical-align: middle;
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
    p {
      color: #343a49;
      font-weight: 700;
      margin: 0;
      line-height: 1rem;
    }
    small {
      color: #8a8a8a;
      margin: 0;
      font-size: small;
      font-weight: 300;
      line-height: 0;
      margin-right: 2rem;
    }
  }
  .post-body {
    display: grid;
    grid-template-columns: 60% 20% 20%;
    grid-template-rows: auto;
    padding-left: 1rem;
    color: #464646;
    p {
      display: -webkit-box;
      margin: 0;
      -webkit-line-clamp: ${(props: CardPropType) =>
        props.truncated ? 3 : "unset"};
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    a {
      text-decoration: none;
      color: #28cdcf;
      font-size: small;
    }
    .post-sentiment {
      align-self: center;
      justify-self: center;
      padding: 0 0.5rem;
      border-radius: 5%;
      background-color: ${(props: CardPropType) => {
        if (props.sentiment === "Positive") return "#dffce7";
        if (props.sentiment === "Neutral") return "#f6f6f9";
        if (props.sentiment === "Negative") return "#eecbcf";
      }};
      color: ${(props: CardPropType) => {
        if (props.sentiment === "Positive") return "#45d971";
        if (props.sentiment === "Neutral") return "#8e8e8f";
        if (props.sentiment === "Negative") return "#600007";
      }};
      border: ${(props: CardPropType) => {
        if (props.sentiment === "Positive") return "1px solid #45d971";
        if (props.sentiment === "Neutral") return "1px solid #8e8e8f";
        if (props.sentiment === "Negative") return "1px solid #600007";
      }};
    }
  }
  .post-footer {
    font-size: small;
    color: #727272;
    padding-top: 1rem;
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0 0 0 1rem;
    }
    li {
      list-style: none;
      margin-right: 1rem;
    }
  }
`;

export const PostSection = styled.section`
  padding: 1rem;
  .post-index-header {
    display: grid;
    grid-template-columns: 60% 20% 20%;
    padding: 0 2rem 0 2rem;
    p:not(:first-child) {
      align-self: center;
      justify-self: center;
    }
  }
`;

type BarPropType = {
  impact: number;
};

export const Bars = styled.div`
  display: inline-block;
  align-self: center;
  justify-self: center;
  height: 1.25rem;
  .bar {
    display: inline-block;
    width: 0.25rem;
    min-height: 20%;
    margin-right: 0.125rem;
    background-color: #d1d1d1;
    &.first-bar {
      height: 20%;
      background-color: ${(props: BarPropType) =>
        props.impact >= 1 ? "#28cdcf" : "#d1d1d1"};
    }
    &.second-bar {
      height: 40%;
      background-color: ${(props: BarPropType) =>
        props.impact >= 2 ? "#28cdcf" : "#d1d1d1"};
    }
    &.third-bar {
      height: 60%;
      background-color: ${(props: BarPropType) =>
        props.impact >= 3 ? "#28cdcf" : "#d1d1d1"};
    }
    &.fourth-bar {
      height: 80%;
      background-color: ${(props: BarPropType) =>
        props.impact >= 4 ? "#28cdcf" : "#d1d1d1"};
    }
    &.fifth-bar {
      height: 100%;
      background-color: ${(props: BarPropType) =>
        props.impact >= 5 ? "#28cdcf" : "#d1d1d1"};
    }
  }
  &:after {
    content: ${(props: BarPropType) => `"${props.impact}"`};
    color: #28cdcf;
    margin-left: 0.5rem;
  }
`;
