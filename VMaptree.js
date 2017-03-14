Polymer({
    is: 'VMap-tree',
    behaviors: [px.card],
    properties: {
        legendData: {
            type: Array,
            value: [],
            notify: true
        },
        data: {
            type: Array,
            value: [],
            notify: true
        },
        dataLoading: {
            type: Boolean,
            value: true
        },
        timers: {
            type: Array,
            value: []
        },
        barChartData: {
            type: Array,
            value: [],
            notify: true
        }

    },
 attached: function(alters, alertName) {
        var self = this;
        self.addEventListener('VMap-data-started', function() {
            this.set('dataLoading', true);
        });

        self.addEventListener('VMap-data-finished', function() {
            this.set('dataLoading', false);
        });
        self.addEventListener('move-slider', function() {
            var autoslide = document.querySelector('#moveSlider');
            autoslide.setAttribute('value', '168');
        });

        self.dragSlider();
        document.querySelector('.legend-section').style.display = 'none';
        this.style.display = "block";
        self.fetchVMapTreeData();
        self.getTimeline();
        self.refreshMap();
        var legendData = [{
            label: 'Safety',
            type: 'safety',
            class: '',
            isSwitched: true,
            color: '#ed1c24'
        }, {
            label: 'Controls',
            type: 'controls',
            class: '',
            isSwitched: true,
            color: '#f8d632'

        }, {
            label: 'Prod Impact',
            type: 'prodImpact',
            class: '',
            isSwitched: true,
            color: '#51bee5'
        }];
        self.legendData = legendData;
    }
});
