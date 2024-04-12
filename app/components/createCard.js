"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCard() {
  const router = useRouter();
  const [title, alterTitle] = useState("");
  const [body, alterBody] = useState("");
  const [color, alterColor] = useState("danger");
  const [load, loadState] = useState(false);
  //onsubmit we fire this function
  const submitForm = async (e) => {
    e.preventDefault();
    loadState(true);

    const formData = {
      title,
      body,
      color,
    };

    const answer = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (answer.ok === true) {
      router.refresh();
      router.push("/participants");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <div className="col-4">
            <input
              name="title"
              className="form-control mb-2"
              placeholder="title"
              value={title}
              onChange={(e) => alterTitle(e.target.value)}
            />
          </div>
          <div className="col-4">
            <input
              name="color"
              className="form-control mb-2"
              placeholder="color"
              value={color}
              onChange={(e) => alterColor(e.target.value)}
            />
          </div>
          <div className="col-4">
            <textarea
              className="form-control mb-2"
              name="body"
              value={body}
              rows={5}
              placeholder="body"
              onChange={(e) => alterBody(e.target.value)}
            ></textarea>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-danger" disabled={load}>
              {load && <span>Adding...</span>}
              {!load && <span>Add</span>}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
