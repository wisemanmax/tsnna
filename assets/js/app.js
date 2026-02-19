const page = document.body.dataset.page;
for (const link of document.querySelectorAll('.nav-link')) {
  if (link.dataset.page === page) link.classList.add('active');
}
const now = new Date();
for (const node of document.querySelectorAll('[data-last-updated]')) {
  node.textContent = now.toLocaleString();
}
