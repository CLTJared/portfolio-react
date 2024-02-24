export default function Project({ project, text, img, url }) {
    return (
      <div class="card">
      <img src={img} class="card-img-top" alt={project} />
      <div class="card-body">
        <h5 class="card-title">{project}</h5>
        <p class="card-text">{text}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">{url}</small>
      </div>
    </div>
    );
  }