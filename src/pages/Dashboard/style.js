import styled from "styled-components";

export const DashboardStyled = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-primary);

  .casal-box {
    height: 600px;
    width: 70%;
    max-width: 1000px;
    position: relative;

    overflow: hidden;
  }

  .casal-image {
    height: 120%;
    min-width: 650px;

    position: absolute;
    bottom: 0px;
    left: -130px;
  }

  .content {
    width: 50%;
    max-width: 600px;
    height: 500px;

    background-color: var(--color-white);
    border-radius: 5px;

    position: absolute;
    right: 20px;

    .container-image {
      display: flex;
      justify-content: space-between;
      align-items: start;

      width: 100%;

      .flowers {
        width: 50%;
        max-width: 300px;
      }
    }

    .logo-image {
      width: 40%;
      max-width: 200px;
    }

    .infos {
      position: absolute;
      bottom:2%;

      width: 100%;

      h1 {
        font-size: 50px;
        width: 300px;

        padding-left: 35px;
      }

      h2 {
        margin-top: 30px;

        font-size: 25px;
        padding-left: 35px;
      }

      h3 {
        font-size: 25px;
        padding-left: 35px;

        margin-top: 5px;
      }
      .container {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .clock {
        display: flex;
        justify-content: space-around;

        width: 90%;
        height: 90px;

        margin: 50px 0px 0px 0px;

        .box {
          background-color: var(--color-primary);
          width: 23%;

          color: var(--color-white);

          border-radius: 5px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          p {
            font-size: 40px;
          }

          span {
            font-size: 23px;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .infos {
      .container {
        .clock {
          .box {
            p {
              font-size: 30px;
            }
            span {
              font-size: 15px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 760px) {
    .content {
        height: 85%;

      .infos {
        bottom: 10%;

        h1 {
          font-size: 40px;
          width: 200px;
        }

        h2{
            font-size: 20px;
        }

        h3{
            font-size: 20px;
        }
        .container{
            .clock{
                margin-top: 30px;
            }
        }
      }
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: space-between;

    .casal-box {
        height: 600px;
        width: 100%;
        height: auto;

        display: flex;
        align-items: center;
        justify-content: center;

        .casal-image {
            width: 100%;
            height: auto;

            position: relative;
            bottom: 0px;
            left: 0px;;
        }
    }

    .content {
        position: relative;

        width: 95%;
        height: 500px;

        right: 0px;
        
        margin-top: -250px;
        margin-bottom: 30px;

        .infos {
            bottom: 0px;

            .container {
                margin-bottom: 30px;

                .clock {
                    .box{

                    }
                }
            }
        }
    }
  }

  @media (max-width: 375px) {
    .infos {
      .container {
        .clock {
          .box {
            span {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
`;
