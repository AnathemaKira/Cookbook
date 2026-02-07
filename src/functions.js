loadSidebarData();

function loadSidebarData()
{
    var html = "";

    $.getJSON("api.php?mode=loadSidebarData", function(result)
    {
        result.forEach(row => 
        {
            html += `<h3>${row["Name"]} <i class="bi bi-chevron-down"></i></h3>`;
        });
        $(".sidebar-content").html(html);
    });
}
/*
    <h6>Geschmack <i class="bi bi-chevron-down"></i></h6>
                    <div class="filter-item">
                        <input type="checkbox" id="sweet" checked>
                        <label for="sweet">Süß</label>
                    </div>

                    <div class="filter-item">
                        <input type="checkbox" id="sour">
                        <label for="sour">Sauer</label>
                    </div>

                    <h6>Gerichte <i class="bi bi-chevron-down"></i></h6>
                    <div class="filter-item">
                        <input id="main-dish" type="checkbox">
                        <label class="form-check-label" for="main-dish">Hauptgericht</label>
                    </div>

                    <h6>Region <i class="bi bi-chevron-down"></i></h6>
                    <div class="filter-item">
                        <input id="german" type="checkbox">
                        <label class="form-check-label" for="german">Deutsch</label>
                    </div>
                    <div class="filter-item">
                        <input id="japan" type="checkbox">
                        <label class="form-check-label" for="japan">Japan</label>
                    </div>*/