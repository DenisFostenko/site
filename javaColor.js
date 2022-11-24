var panels = document.getElementsByClassName("work_section_zero");
var actives = document.getElementsByClassName('active');
for (i = 0; panels.length > i; i++) {
  panels[i].onclick = function() {
    var currentActive = actives[0];
    if (currentActive)
      currentActive.classList.remove("active");

    if (currentActive !== this)
      this.classList.add("active");
  };
}