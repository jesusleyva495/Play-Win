document.addEventListener("DOMContentLoaded", () => {
  const scrollToBottom = document.getElementById("btn-ir-arriba");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottom.style.display = "block";
    } else {
      scrollToBottom.style.display = "none";
    }
  });
  scrollToBottom.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  const scrollToBottomDown = document.getElementById("contacto");
  scrollToBottomDown.addEventListener("click", () => {
    window.scrollTo({
      top: 1000000,
      behavior: "smooth",
    });
  });
});

const search = document.querySelector(".input-group input"),
  table_rows = document.querySelectorAll("tbody tr"),
  table_headings = document.querySelectorAll("thead th");

search.addEventListener("input", searchTable);

function searchTable() {
  table_rows.forEach((row, i) => {
    let table_data = row.textContent.toLowerCase(),
      searc_data = search.value.toLowerCase();

    row.classList.toggle("hide", table_data.indexOf(searc_data) < 0);
    row.style.setProperty("--delay", i / 25 + "s");
  });

  document.querySelectorAll("tbody tr:not(.hide)").forEach((visible_row, i) => {
    visible_row.style.backgroundcolor =
      1 % 2 == 0 ? "transparent" : "#0000000b";
  });
}

// Sorting table
table_headings.forEach((head, i) => {
  let sort_asc = true;
  head.onclick = () => {
    table_headings.forEach((head) => head.classList.remove("active"));
    head.classList.add("active");

    document
      .querySelectorAll("td")
      .forEach((td) => td.classList.remove("active"));
    table_rows.forEach((row) => {
      row.querySelectorAll("td")[i].classList.add("active");
    });

    head.classList.toggle("asc", sort_asc);
    sort_asc = head.classList.contains("asc") ? false : true;

    sortTable(i, sort_asc);
  };
});

function sortTable(column, sort_asc) {
  [...table_rows]
    .sort((a, b) => {
      let first_row = a
          .querySelectorAll("td")
          [column].textContent.toLowerCase(),
        second_row = b.querySelectorAll("td")[column].textContent.toLowerCase();

      return sort_asc
        ? first_row < second_row
          ? 1
          : -1
        : first_row < second_row
        ? -1
        : 1;
    })
    .map((sorted_row) =>
      document.querySelector("tbody").appendChild(sorted_row)
    );
}

const hamburguer = document.querySelector(".hamburguer");
const navLinks = document.querySelector(".nav-links");

hamburguer.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
