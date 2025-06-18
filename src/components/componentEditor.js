// Sound Factory Component Editor Utilities
// This file provides utilities for making components drag-and-drop editable

export class ComponentEditor {
    constructor() {
        this.isEditMode = false;
        this.currentEditingElement = null;
        this.componentRegistry = new Map();
        this.editHistory = [];
        this.redoHistory = [];
        
        this.registerDefaultComponents();
    }

    // Register default editable components
    registerDefaultComponents() {
        this.registerComponent('homebase', {
            name: 'Homebase',
            description: 'Main control interface',
            editableProperties: {
                backgroundColor: { type: 'color', default: '#000000' },
                textColor: { type: 'color', default: '#ffffff' },
                borderRadius: { type: 'range', min: 0, max: 50, default: 10, unit: 'px' },
                padding: { type: 'text', default: '20px' },
                height: { type: 'text', default: 'auto' }
            }
        });

        this.registerComponent('grid-interface', {
            name: 'Grid Interface',
            description: 'Interactive grid system',
            editableProperties: {
                backgroundColor: { type: 'color', default: '#000000' },
                gridGap: { type: 'range', min: 0, max: 50, default: 10, unit: 'px' },
                borderColor: { type: 'color', default: '#333333' },
                borderWidth: { type: 'range', min: 0, max: 10, default: 1, unit: 'px' }
            }
        });

        this.registerComponent('chat-section', {
            name: 'Chat Section',
            description: 'Live chat interface',
            editableProperties: {
                backgroundColor: { type: 'color', default: '#000000' },
                textColor: { type: 'color', default: '#ffffff' },
                fontSize: { type: 'range', min: 10, max: 24, default: 14, unit: 'px' },
                maxHeight: { type: 'text', default: '400px' }
            }
        });
    }

    // Register a new component type
    registerComponent(type, config) {
        this.componentRegistry.set(type, config);
    }

    // Toggle edit mode
    toggleEditMode() {
        this.isEditMode = !this.isEditMode;
        const body = document.body;
        const editToggle = document.getElementById('editToggle');
        
        if (this.isEditMode) {
            body.classList.add('edit-mode');
            editToggle.textContent = '👁️';
            editToggle.title = 'Exit Edit Mode';
            this.showEditIndicators();
            console.log('Edit mode: ON');
        } else {
            body.classList.remove('edit-mode');
            editToggle.textContent = '✏️';
            editToggle.title = 'Toggle Edit Mode';
            this.hideEditIndicators();
            console.log('Edit mode: OFF');
        }
    }

    // Show edit indicators for all editable components
    showEditIndicators() {
        const editableElements = document.querySelectorAll('.editable-component');
        editableElements.forEach(element => {
            if (!element.querySelector('.edit-indicator')) {
                const componentType = element.dataset.componentType || element.className.split(' ')[0];
                const indicator = this.createEditIndicator(componentType);
                indicator.onclick = (e) => {
                    e.stopPropagation();
                    this.openComponentEditor(element);
                };
                element.appendChild(indicator);
                element.style.position = 'relative';
            }
        });
    }

    // Hide edit indicators
    hideEditIndicators() {
        const indicators = document.querySelectorAll('.edit-indicator');
        indicators.forEach(indicator => indicator.remove());
    }

    // Create edit indicator element
    createEditIndicator(componentType) {
        const indicator = document.createElement('div');
        indicator.className = 'edit-indicator';
        indicator.innerHTML = `
            <span class="edit-icon">✏️</span>
            <span class="edit-label">EDIT ${componentType.toUpperCase()}</span>
        `;
        return indicator;
    }

    // Open component editor modal
    openComponentEditor(element) {
        const componentType = element.dataset.componentType || element.className.split(' ')[0];
        const config = this.componentRegistry.get(componentType);
        
        if (!config) {
            console.warn(`No configuration found for component type: ${componentType}`);
            return;
        }

        this.currentEditingElement = element;
        const modal = this.createEditorModal(componentType, config);
        document.body.appendChild(modal);
        
        // Focus on first input
        const firstInput = modal.querySelector('input, textarea, select');
        if (firstInput) firstInput.focus();
    }

    // Create editor modal
    createEditorModal(componentType, config) {
        const overlay = document.createElement('div');
        overlay.className = 'component-editor-overlay';
        
        const modal = document.createElement('div');
        modal.className = 'component-editor-modal';
        
        modal.innerHTML = `
            <div class="component-editor-header">
                <h3>Edit ${config.name}</h3>
                <p class="component-description">${config.description}</p>
                <button class="close-btn" onclick="componentEditor.closeEditor()">×</button>
            </div>
            <div class="component-editor-content">
                ${this.createEditorTabs(config)}
                ${this.createPropertyPanels(config)}
            </div>
            <div class="component-editor-footer">
                <button class="save-btn" onclick="componentEditor.saveChanges()">Save Changes</button>
                <button class="reset-btn" onclick="componentEditor.resetToDefaults()">Reset to Defaults</button>
                <button class="full-editor-btn" onclick="componentEditor.openFullEditor()">Open Full Editor</button>
                <button class="cancel-btn" onclick="componentEditor.closeEditor()">Cancel</button>
            </div>
        `;
        
        overlay.appendChild(modal);
        return overlay;
    }

    // Create editor tabs
    createEditorTabs(config) {
        return `
            <div class="editor-tabs">
                <button class="tab-btn active" onclick="componentEditor.switchTab('properties')">Properties</button>
                <button class="tab-btn" onclick="componentEditor.switchTab('advanced')">Advanced</button>
                <button class="tab-btn" onclick="componentEditor.switchTab('preview')">Preview</button>
            </div>
        `;
    }

    // Create property panels
    createPropertyPanels(config) {
        const propertiesPanel = this.createPropertiesPanel(config.editableProperties);
        
        return `
            <div class="editor-panel" id="properties-panel">
                ${propertiesPanel}
            </div>
            <div class="editor-panel" id="advanced-panel" style="display: none;">
                <div class="property-group">
                    <label>Custom CSS:</label>
                    <textarea class="custom-css-input" rows="10" placeholder="Enter custom CSS rules..."></textarea>
                </div>
                <div class="property-group">
                    <label>Custom Classes:</label>
                    <input type="text" class="custom-classes-input" placeholder="Enter additional CSS classes">
                </div>
            </div>
            <div class="editor-panel" id="preview-panel" style="display: none;">
                <div class="preview-container">
                    <div class="preview-header">
                        <h4>Live Preview</h4>
                        <button class="refresh-preview-btn" onclick="componentEditor.refreshPreview()">🔄 Refresh</button>
                    </div>
                    <div class="preview-content" id="preview-content">
                        <!-- Live preview will be rendered here -->
                    </div>
                </div>
            </div>
        `;
    }

    // Create properties panel content
    createPropertiesPanel(properties) {
        let html = '';
        
        for (const [key, config] of Object.entries(properties)) {
            html += `<div class="property-group">`;
            html += `<label>${this.formatPropertyName(key)}:</label>`;
            
            switch (config.type) {
                case 'color':
                    html += `<input type="color" class="property-input" data-property="${key}" value="${config.default}">`;
                    break;
                case 'range':
                    html += `<div class="range-input-group">`;
                    html += `<input type="range" class="property-input range-input" data-property="${key}" min="${config.min}" max="${config.max}" value="${config.default}">`;
                    html += `<span class="range-value">${config.default}${config.unit || ''}</span>`;
                    html += `</div>`;
                    break;
                case 'text':
                default:
                    html += `<input type="text" class="property-input" data-property="${key}" value="${config.default}">`;
                    break;
            }
            
            html += `</div>`;
        }
        
        return html;
    }

    // Format property name for display
    formatPropertyName(name) {
        return name.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    }

    // Switch editor tabs
    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        
        // Update panels
        document.querySelectorAll('.editor-panel').forEach(panel => panel.style.display = 'none');
        document.getElementById(`${tabName}-panel`).style.display = 'block';
        
        if (tabName === 'preview') {
            this.refreshPreview();
        }
    }

    // Update property in real-time
    updateProperty(property, value, unit = '') {
        if (!this.currentEditingElement) return;
        
        const cssProperty = this.convertToCSSProperty(property);
        this.currentEditingElement.style[cssProperty] = value + unit;
        
        // Update range value display
        const rangeValue = event.target.parentElement.querySelector('.range-value');
        if (rangeValue) {
            rangeValue.textContent = value + unit;
        }
        
        // Update preview if in preview mode
        if (document.getElementById('preview-panel').style.display !== 'none') {
            this.refreshPreview();
        }
    }

    // Convert property name to CSS property
    convertToCSSProperty(property) {
        return property.replace(/([A-Z])/g, '-$1').toLowerCase();
    }

    // Save changes
    saveChanges() {
        if (!this.currentEditingElement) return;
        
        // Save to history for undo functionality
        this.saveToHistory();
        
        console.log('Component changes saved');
        this.closeEditor();
    }

    // Reset to defaults
    resetToDefaults() {
        if (!this.currentEditingElement) return;
        
        const componentType = this.currentEditingElement.dataset.componentType;
        const config = this.componentRegistry.get(componentType);
        
        if (config) {
            for (const [key, propConfig] of Object.entries(config.editableProperties)) {
                const cssProperty = this.convertToCSSProperty(key);
                this.currentEditingElement.style[cssProperty] = propConfig.default + (propConfig.unit || '');
                
                // Update input values
                const input = document.querySelector(`[data-property="${key}"]`);
                if (input) {
                    input.value = propConfig.default;
                    if (input.type === 'range') {
                        const rangeValue = input.parentElement.querySelector('.range-value');
                        if (rangeValue) {
                            rangeValue.textContent = propConfig.default + (propConfig.unit || '');
                        }
                    }
                }
            }
        }
    }

    // Refresh preview
    refreshPreview() {
        const previewContent = document.getElementById('preview-content');
        if (previewContent && this.currentEditingElement) {
            previewContent.innerHTML = `
                <div class="preview-item">
                    ${this.currentEditingElement.outerHTML}
                </div>
            `;
        }
    }

    // Open full editor
    openFullEditor() {
        window.open('/editor', '_blank');
    }

    // Close editor
    closeEditor() {
        const overlay = document.querySelector('.component-editor-overlay');
        if (overlay) {
            overlay.remove();
        }
        this.currentEditingElement = null;
    }

    // Save to history for undo functionality
    saveToHistory() {
        if (this.currentEditingElement) {
            this.editHistory.push({
                element: this.currentEditingElement,
                styles: this.currentEditingElement.style.cssText,
                timestamp: Date.now()
            });
            
            // Keep only last 50 changes
            if (this.editHistory.length > 50) {
                this.editHistory.shift();
            }
            
            // Clear redo history when new change is made
            this.redoHistory = [];
        }
    }

    // Undo last change
    undo() {
        if (this.editHistory.length > 0) {
            const lastChange = this.editHistory.pop();
            this.redoHistory.push({
                element: lastChange.element,
                styles: lastChange.element.style.cssText,
                timestamp: Date.now()
            });
            
            lastChange.element.style.cssText = lastChange.styles;
            console.log('Undid last change');
        }
    }

    // Redo last undone change
    redo() {
        if (this.redoHistory.length > 0) {
            const lastUndo = this.redoHistory.pop();
            this.editHistory.push({
                element: lastUndo.element,
                styles: lastUndo.element.style.cssText,
                timestamp: Date.now()
            });
            
            lastUndo.element.style.cssText = lastUndo.styles;
            console.log('Redid last change');
        }
    }

    // Export current design to JSON
    exportDesign() {
        const design = {
            timestamp: Date.now(),
            components: []
        };

        const editableElements = document.querySelectorAll('.editable-component');
        editableElements.forEach(element => {
            design.components.push({
                type: element.dataset.componentType,
                styles: element.style.cssText,
                classes: element.className,
                html: element.innerHTML
            });
        });

        return JSON.stringify(design, null, 2);
    }

    // Import design from JSON
    importDesign(designJson) {
        try {
            const design = JSON.parse(designJson);
            
            design.components.forEach(componentData => {
                const element = document.querySelector(`[data-component-type="${componentData.type}"]`);
                if (element) {
                    element.style.cssText = componentData.styles;
                    // Note: Be careful with innerHTML for security
                    console.log(`Applied styles to ${componentData.type}`);
                }
            });
            
            console.log('Design imported successfully');
        } catch (error) {
            console.error('Failed to import design:', error);
        }
    }
}

// Initialize global component editor
window.componentEditor = new ComponentEditor();

// Global functions for onclick handlers
window.toggleEditMode = () => window.componentEditor.toggleEditMode();

// Add event listeners for property inputs
document.addEventListener('input', (e) => {
    if (e.target.classList.contains('property-input')) {
        const property = e.target.dataset.property;
        const config = window.componentEditor.componentRegistry.get(
            window.componentEditor.currentEditingElement?.dataset.componentType
        );
        
        if (config && config.editableProperties[property]) {
            const unit = config.editableProperties[property].unit || '';
            window.componentEditor.updateProperty(property, e.target.value, unit);
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case 'z':
                e.preventDefault();
                if (e.shiftKey) {
                    window.componentEditor.redo();
                } else {
                    window.componentEditor.undo();
                }
                break;
            case 'e':
                e.preventDefault();
                window.componentEditor.toggleEditMode();
                break;
            case 's':
                e.preventDefault();
                if (window.componentEditor.currentEditingElement) {
                    window.componentEditor.saveChanges();
                }
                break;
        }
    }
    
    if (e.key === 'Escape' && window.componentEditor.currentEditingElement) {
        window.componentEditor.closeEditor();
    }
});
