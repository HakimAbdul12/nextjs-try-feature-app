import Link from "next/link";
export default function Loading() {
  return (
    <div>
      <div className="container">
        <div className="row p-3">
          <div className="col-4 mb-3">
            <div class="card c1 c-all">
              <div class="card-body">
                <div className="line-w"></div>
              </div>
            </div>
          </div>
          <div className="col-4 mb-3">
            <div class="card c1 c-all">
              <div class="card-body"></div>
            </div>
          </div>
          <div className="col-4 mb-3">
            <div class="card c1 c-all">
              <div class="card-body">
                <div className="line-w"></div>
              </div>
            </div>
          </div>
          <div className="col-4 mb-3">
            <div class="card c2 c-all">
              <div class="card-body"></div>
            </div>
          </div>
          <div className="col-4 mb-3">
            <div class="card c2 c-all">
              <div class="card-body">
                <div className="line-w2"></div>
              </div>
            </div>
          </div>
          <div className="col-4 mb-3">
            <div class="card c2 c-all">
              <div class="card-body"></div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">
        <small className="text-primary">
          please wait for the process to complete or go back
          <Link href="/">Home ←</Link>
        </small>
      </p>
    </div>
  );
}
