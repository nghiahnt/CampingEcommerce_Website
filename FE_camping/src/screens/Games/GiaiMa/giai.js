import React, { useState } from "react";
import styles from "./Giai.module.sass";

const questions = [
  {
    title: "Mật thư quốc ngữ điện tín",
    question:
      "nawm 1942 cos 400 banj trangs six tham duwj traij hopj banj hoa luw",
    key: "Dễ mà, just do it",
    answer: "năm 1942 có 400 bạn tráng sĩ tham dự trại họp bạn hoa lư",
    hint: "Áp dụng cách gõ chữ telex để giải mật thư",
    type: "text",
  },
  {
    title: "Mật thư bí ẩn",
    question:
      "-... .- -. .--- / - .... .- .- - .--- / - ..- -.-- . . - .--- / ...- --- .-- .. ..-.",
    key: "Mã morse như nào ấy nhỉ? Dễ mà, just do it",
    answer: "bạn thật tuyệt vời",
    hint: "Bạn đối chiếu với mã morse là ra, dấu / là là 1 từ",
    type: "text",
  },
  {
    title: "Mật thư kí tự sắp xếp",
    imageUrl: "/images/games/anh1.png",
    key: "Mưa rơi theo hướng Tây Bắc - Đông Nam",
    answer: "moi ngay lam mot viec thien",
    hint: "Đọc nội dung theo đường chéo từ hướng trái-trên xuống hướng phải-dưới. Đọc từ đường chéo đầu tiên bên phải",
    type: "image",
  },
];

function Giai() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");
  const [visibel, setVisibel] = useState(false);
  const checkAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (
      userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()
    ) {
      setResult("Đúng!");
      setTimeout(() => {
        nextQuestion();
      }, 3000);
    } else {
      setResult("Sai!");
    }
  };

  const showHint = () => {
    const currentQuestion = questions[currentQuestionIndex];
    setVisibel(!visibel);
    setResult(`Gợi ý: ${currentQuestion.hint}`);
  };

  const nextQuestion = () => {
    setResult("");
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Game Over");
    }
    setUserAnswer("");
  };

  const previousQuestion = () => {
    setResult("");
    if (currentQuestionIndex - 1 >= 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
    setUserAnswer("");
  };

  const showQuestion = () => {
    if (currentQuestionIndex < questions.length && currentQuestionIndex >= 0) {
      const currentQuestion = questions[currentQuestionIndex];
      if (currentQuestion.type === "text") {
        return (
          <div className={styles.question_frame}>
            <h2>{currentQuestion.title}</h2>
            <p className={styles.line_question}>{currentQuestion.question}</p>
            <p>
              <strong>Khóa:</strong> {currentQuestion.key}
            </p>
            <div className={styles.input_container}>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Nhập câu trả lời"
              />
            </div>
            <div>
              <button
                className={"button button-green button-wide check-button"}
                onClick={checkAnswer}
              >
                Kiểm tra
              </button>
            </div>
            <div>{visibel ? " " : result}</div>
            <div className={styles.button_style}>
              <div className={styles.col}>
                <button
                  className={"button button-green button-wide"}
                  onClick={showHint}
                >
                  Gợi Ý
                </button>
              </div>
              <div className={styles.col}>
                <button
                  className={"button button-green button-wide"}
                  onClick={previousQuestion}
                >
                  Câu Trước Đó
                </button>
              </div>
              <div className={styles.col}>
                <button
                  className={"button button-green button-wide"}
                  onClick={nextQuestion}
                >
                  Câu Kế Tiếp
                </button>
              </div>
            </div>
          </div>
        );
      } else if (currentQuestion.type === "image") {
        return (
          <div className={styles.question_frame}>
            <h2>{currentQuestion.title}</h2>
            <img src={currentQuestion.imageUrl} alt="Câu hỏi với hình ảnh" />
            <p>
              <strong>Khóa:</strong> {currentQuestion.key}
            </p>
            <div className={styles.input_container}>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Nhập câu trả lời"
              />
            </div>
            <div>
              <button
                className={"button button-green button-wide check-button"}
                onClick={checkAnswer}
              >
                Kiểm tra
              </button>
            </div>
            <div>{visibel ? " " : result}</div>
            <div className={styles.button_style}>
              <div className={styles.col}>
                <button
                  className={"button button-green button-wide"}
                  onClick={showHint}
                >
                  Gợi Ý
                </button>
              </div>
              <div className={styles.col}>
                <button
                  className={"button button-green button-wide"}
                  onClick={previousQuestion}
                >
                  Câu Trước Đó
                </button>
              </div>
              <div className={styles.col}>
                <button
                  className={"button button-green button-wide"}
                  onClick={nextQuestion}
                >
                  Câu Kế Tiếp
                </button>
              </div>
            </div>
          </div>
        );
      }
    } else {
      return <p>Game Over</p>;
    }
  };

  return (
    <div className={styles.game_container}>
      <div className={styles.question_frame}>
        <h1>Game Giải Mã</h1>
        {showQuestion()}
      </div>
    </div>
  );
}

export default Giai;
